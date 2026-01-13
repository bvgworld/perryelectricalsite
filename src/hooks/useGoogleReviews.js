import { useState, useEffect } from 'react';
import { fetchGoogleReviews, getAggregateRating } from '../lib/googleBusinessApi';
import { staticReviews } from '../data/staticReviews';

/**
 * Hook to fetch and manage Google reviews
 * Falls back to static reviews if API is unavailable
 */
export const useGoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aggregateRating, setAggregateRating] = useState({ ratingValue: 5.0, reviewCount: 0 });

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
        const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

        if (!placeId || !apiKey) {
          console.warn('Google API credentials not configured. Using fallback reviews.');
          // Use static reviews as fallback
          setReviews(staticReviews);
          const rating = getAggregateRating(staticReviews);
          setAggregateRating(rating);
          setLoading(false);
          return;
        }

        const fetchedReviews = await fetchGoogleReviews(placeId, apiKey);
        
        if (fetchedReviews && fetchedReviews.length > 0) {
          // Limit to 5 reviews for the carousel
          const limitedReviews = fetchedReviews.slice(0, 5);
          setReviews(limitedReviews);
          
          // Calculate aggregate rating from all fetched reviews
          const rating = getAggregateRating(fetchedReviews);
          setAggregateRating(rating);
        } else {
          // No reviews from API, use static fallback
          setReviews(staticReviews);
          const rating = getAggregateRating(staticReviews);
          setAggregateRating(rating);
        }
      } catch (err) {
        console.error('Failed to load Google reviews:', err);
        setError(err.message);
        // Use static reviews as fallback on error
        setReviews(staticReviews);
        const rating = getAggregateRating(staticReviews);
        setAggregateRating(rating);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  return {
    reviews,
    loading,
    error,
    aggregateRating,
  };
};
