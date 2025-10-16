import { useState, useEffect } from 'react';
import { 
  collection, 
  doc,
  getDoc,
  setDoc,
  onSnapshot 
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export const useFeaturedProjects = () => {
  const [featuredProjectIds, setFeaturedProjectIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const featuredRef = doc(db, 'settings', 'featuredProjects');
    
    const unsubscribe = onSnapshot(featuredRef, 
      (doc) => {
        console.log('useFeaturedProjects - Document exists:', doc.exists());
        if (doc.exists()) {
          const data = doc.data();
          console.log('useFeaturedProjects - Document data:', data);
          setFeaturedProjectIds(data.projectIds || []);
        } else {
          console.log('useFeaturedProjects - Document does not exist, setting empty array');
          setFeaturedProjectIds([]);
        }
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error fetching featured projects:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const updateFeaturedProjects = async (projectIds) => {
    try {
      const featuredRef = doc(db, 'settings', 'featuredProjects');
      await setDoc(featuredRef, { 
        projectIds: projectIds.slice(0, 3), // Limit to 3 projects
        updatedAt: new Date()
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating featured projects:', error);
      return { success: false, error: error.message };
    }
  };

  return { 
    featuredProjectIds, 
    loading, 
    error, 
    updateFeaturedProjects 
  };
};