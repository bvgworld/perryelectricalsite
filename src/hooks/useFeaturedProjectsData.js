import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useFeaturedProjects } from './useFeaturedProjects';

export const useFeaturedProjectsData = () => {
  const { featuredProjectIds, loading: idsLoading, error: idsError } = useFeaturedProjects();
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Debug logging
  console.log('useFeaturedProjectsData - featuredProjectIds:', featuredProjectIds);
  console.log('useFeaturedProjectsData - idsLoading:', idsLoading);
  console.log('useFeaturedProjectsData - idsError:', idsError);

  useEffect(() => {
    if (idsLoading) return;
    
    if (featuredProjectIds.length === 0) {
      setFeaturedProjects([]);
      setLoading(false);
      setError(idsError);
      return;
    }

    // Use a different approach to avoid Firestore internal assertion error
    // Fetch all projects and filter client-side
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const allProjects = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Filter to only include featured projects and sort by the order in featuredProjectIds array
        const sortedProjects = featuredProjectIds
          .map(id => allProjects.find(project => project.id === id))
          .filter(Boolean); // Remove any undefined projects
        
        setFeaturedProjects(sortedProjects);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error fetching featured projects data:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [featuredProjectIds, idsLoading, idsError]);

  return { 
    featuredProjects, 
    loading: loading || idsLoading, 
    error: error || idsError 
  };
};
