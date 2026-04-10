import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(Boolean(auth));

  // Sign in with email and password
  const login = async (email, password) => {
    if (!auth || !db) {
      throw new Error('Admin authentication is unavailable. Check Firebase environment variables.');
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role !== 'admin') {
          throw new Error('Access denied. Admin role required.');
        }
        setUserData(userData);
      } else {
        throw new Error('User not found in database.');
      }
      
      return user;
    } catch (error) {
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth);
      setUserData(null);
    } catch (error) {
      throw error;
    }
  };

  // Create new admin user
  const createAdminUser = async (email, password, displayName) => {
    if (!auth || !db) {
      throw new Error('Admin user creation is unavailable. Check Firebase environment variables.');
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Create user document in Firestore
      const userData = {
        email: user.email,
        displayName,
        role: 'admin',
        createdAt: serverTimestamp(),
        createdBy: currentUser?.uid || 'system'
      };
      
      await setDoc(doc(db, 'users', user.uid), userData);
      
      return user;
    } catch (error) {
      throw error;
    }
  };

  // Check if user is admin
  const isAdmin = () => {
    return userData?.role === 'admin';
  };

  useEffect(() => {
    if (!auth || !db) {
      setCurrentUser(null);
      setUserData(null);
      setLoading(false);
      return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get user data from Firestore
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserData(userData);
          } else {
            // User exists in Auth but not in Firestore
            setUserData(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    login,
    logout,
    createAdminUser,
    isAdmin,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
