import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc,
  doc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { deleteImage } from '../utils/imageUpload';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const projectsRef = collection(db, 'projects');
    const q = query(projectsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const projectsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProjects(projectsData);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const addProject = async (projectData, userId) => {
    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        ...projectData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdBy: userId
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding project:', error);
      return { success: false, error: error.message };
    }
  };

  const updateProject = async (projectId, projectData, userId) => {
    try {
      await updateDoc(doc(db, 'projects', projectId), {
        ...projectData,
        updatedAt: serverTimestamp(),
        updatedBy: userId
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating project:', error);
      return { success: false, error: error.message };
    }
  };

  const deleteProject = async (projectId) => {
    try {
      // Get the project to check if it has an image
      const projectRef = doc(db, 'projects', projectId);
      const projectDoc = await getDoc(projectRef);
      
      if (!projectDoc.exists()) {
        return { success: false, error: 'Project not found' };
      }
      
      const projectData = projectDoc.data();
      
      // Delete the project image from storage if it exists
      if (projectData.projectImage) {
        try {
          await deleteImage(projectData.projectImage);
        } catch (imageError) {
          console.error('Error deleting project image:', imageError);
          // Continue with project deletion even if image deletion fails
        }
      }
      
      // Delete the project document
      await deleteDoc(projectRef);
      return { success: true };
    } catch (error) {
      console.error('Error deleting project:', error);
      return { success: false, error: error.message };
    }
  };

  return { 
    projects, 
    loading, 
    error, 
    addProject, 
    updateProject, 
    deleteProject 
  };
};