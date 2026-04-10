import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFeaturedProjectsData } from '../../hooks/useFeaturedProjectsData';

const FeaturedProjectsCarousel = () => {
  const { featuredProjects, loading, error } = useFeaturedProjectsData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Limit to 3 featured projects
  const displayProjects = featuredProjects.slice(0, 3);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayProjects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === displayProjects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (displayProjects.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === displayProjects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [displayProjects.length]);

  if (loading) {
    return (
      <div className="relative h-[500px] bg-primary-blue animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white">Loading featured projects...</p>
        </div>
      </div>
    );
  }

  if (error || displayProjects.length === 0) {
    return null; // Don't show carousel if no featured projects
  }

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-primary-blue">
      {/* Carousel Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {displayProjects.map((project, index) => (
          <div 
            key={project.id || index}
            className="min-w-full h-full relative"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.projectImage})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-start pt-8">
              <div className="text-white">
                <p className="text-sm font-semibold tracking-wider uppercase mb-3 text-gray-300">
                  Featured Projects
                </p>
                <h2 className="text-2xl md:text-3xl font-heading mb-4 tracking-[0.02em]">
                  {project.projectName || 'Featured Project'}
                </h2>
                {project.location && (
                  <p className="text-xl text-gray-200 mb-2">
                    {project.location}
                  </p>
                )}
                {project.description && (
                  <p className="text-lg text-gray-300 line-clamp-3 max-w-2xl">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {displayProjects.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm disabled:opacity-50"
            aria-label="Previous project"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm disabled:opacity-50"
            aria-label="Next project"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {displayProjects.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {displayProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProjectsCarousel;

