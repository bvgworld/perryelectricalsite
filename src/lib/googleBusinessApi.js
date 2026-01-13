/**
 * Google Business Profile API Client
 * Fetches reviews from Google Places API (New)
 */

const CACHE_KEY = 'google_reviews_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Get cached reviews if still valid
 */
const getCachedReviews = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid (within 24 hours)
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }

    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading reviews cache:', error);
    return null;
  }
};

/**
 * Cache reviews in localStorage
 */
const cacheReviews = (reviews) => {
  try {
    const cacheData = {
      data: reviews,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error caching reviews:', error);
  }
};

/**
 * Fetch reviews from Google Places API (New)
 * @param {string} placeId - Google Place ID
 * @param {string} apiKey - Google API Key
 * @returns {Promise<Array>} Array of review objects
 */
export const fetchGoogleReviews = async (placeId, apiKey) => {
  // Check cache first
  const cached = getCachedReviews();
  if (cached) {
    return cached;
  }

  if (!placeId || !apiKey) {
    throw new Error('Place ID and API Key are required');
  }

  try {
    // Use Google Places API (New) - Text Search or Place Details
    // For reviews, we need Place Details endpoint
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
    });

    if (!response.ok) {
      // If new API fails, try Places API (Legacy) as fallback
      return await fetchGoogleReviewsLegacy(placeId, apiKey);
    }

    const data = await response.json();
    
    // Transform API response to our review format
    const reviews = (data.reviews || []).map((review) => ({
      id: review.name || `review-${Date.now()}-${Math.random()}`,
      author: review.authorAttribution?.displayName || 'Anonymous',
      rating: review.rating || 5,
      text: review.text?.text || '',
      date: review.publishTime || new Date().toISOString(),
      relativeTime: review.relativePublishTimeDescription || '',
    }));

    // Cache the reviews
    cacheReviews(reviews);

    return reviews;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Try legacy API as fallback
    try {
      return await fetchGoogleReviewsLegacy(placeId, apiKey);
    } catch (legacyError) {
      console.error('Legacy API also failed:', legacyError);
      throw error;
    }
  }
};

/**
 * Fallback to Google Places API (Legacy)
 * This uses the older Places API which may have different rate limits
 */
const fetchGoogleReviewsLegacy = async (placeId, apiKey) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Google Places API error: ${response.status}`);
  }

  const data = await response.json();

  if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
    throw new Error(`Google Places API error: ${data.status}`);
  }

  if (!data.result || !data.result.reviews) {
    return [];
  }

  // Transform legacy API response to our review format
  const reviews = data.result.reviews.map((review) => ({
    id: review.author_url || `review-${Date.now()}-${Math.random()}`,
    author: review.author_name || 'Anonymous',
    rating: review.rating || 5,
    text: review.text || '',
    date: new Date(review.time * 1000).toISOString(),
    relativeTime: review.relative_time_description || '',
  }));

  // Cache the reviews
  cacheReviews(reviews);

  return reviews;
};

/**
 * Get aggregate rating from reviews
 */
export const getAggregateRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return {
      ratingValue: 5.0,
      reviewCount: 0,
    };
  }

  const totalRating = reviews.reduce((sum, review) => sum + (review.rating || 5), 0);
  const averageRating = totalRating / reviews.length;

  return {
    ratingValue: Math.round(averageRating * 10) / 10, // Round to 1 decimal
    reviewCount: reviews.length,
  };
};
