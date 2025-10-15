import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export const useJobs = (statusFilter = null) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jobsRef = collection(db, 'jobs');
    let q;
    
    if (statusFilter) {
      // Use simple where query to avoid composite index requirement
      q = query(jobsRef, where('status', '==', statusFilter));
    } else {
      q = query(jobsRef, orderBy('createdAt', 'desc'));
    }

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const jobsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // If we used a where filter, sort manually since we can't use orderBy with where
        if (statusFilter) {
          jobsData.sort((a, b) => {
            const aTime = a.createdAt?.toDate?.() || new Date(0);
            const bTime = b.createdAt?.toDate?.() || new Date(0);
            return bTime - aTime; // Most recent first
          });
        }
        
        setJobs(jobsData);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Firestore query error:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [statusFilter]);

  const addJob = async (jobData, userId) => {
    try {
      const docRef = await addDoc(collection(db, 'jobs'), {
        ...jobData,
        status: jobData.status || 'open', // Use provided status or default to 'open'
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdBy: userId
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding job:', error);
      return { success: false, error: error.message };
    }
  };

  const updateJob = async (jobId, jobData, userId) => {
    try {
      await updateDoc(doc(db, 'jobs', jobId), {
        ...jobData,
        updatedAt: serverTimestamp(),
        updatedBy: userId
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating job:', error);
      return { success: false, error: error.message };
    }
  };

  const deleteJob = async (jobId) => {
    try {
      await deleteDoc(doc(db, 'jobs', jobId));
      return { success: true };
    } catch (error) {
      console.error('Error deleting job:', error);
      return { success: false, error: error.message };
    }
  };

  return { 
    jobs, 
    loading, 
    error, 
    addJob, 
    updateJob, 
    deleteJob 
  };
};