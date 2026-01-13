import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';
import { staticReviews } from '../../data/staticReviews';
import Container from '../ui/Container';

const GoogleReviewsCarousel = () => {
  const { reviews: apiReviews, loading, error } = useGoogleReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use API reviews if available, otherwise fall back to static reviews
  const reviews = apiReviews && apiReviews.length > 0 ? apiReviews : staticReviews;
  const displayReviews = reviews.slice(0, 5);

  const goToPrevious = () => {
    if (isTransitioning || displayReviews.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayReviews.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning || displayReviews.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === displayReviews.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-advance carousel every 6 seconds (slower than projects carousel)
  useEffect(() => {
    if (displayReviews.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === displayReviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [displayReviews.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return '';
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center py-12">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
              <div className="h-32 bg-gray-200 rounded w-full max-w-3xl mx-auto"></div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (displayReviews.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {displayReviews.map((review, index) => (
                <div 
                  key={review.id || index}
                  className="min-w-full px-3"
                >
                  <div className="bg-accent-light rounded-lg p-5 md:p-6 shadow-md h-full flex flex-col">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-3">
                      {renderStars(review.rating || 5)}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed flex-grow overflow-hidden line-clamp-4">
                      "{review.text}"
                    </blockquote>

                    {/* Author and Date */}
                    <div className="flex flex-col items-center">
                      <p className="font-semibold text-sm text-text-dark mb-1">
                        {review.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {review.relativeTime || formatDate(review.date)}
                      </p>
                    </div>

                    {/* Google Badge */}
                    <div className="mt-4 flex justify-center">
                      <div className="inline-flex items-center text-xs text-gray-600">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google Review
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {displayReviews.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 text-primary-blue transition-all disabled:opacity-50 border border-gray-200"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 text-primary-blue transition-all disabled:opacity-50 border border-gray-200"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {displayReviews.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {displayReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`transition-all rounded-full ${
                    index === currentIndex 
                      ? 'bg-primary-blue w-8 h-3' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default GoogleReviewsCarousel;
