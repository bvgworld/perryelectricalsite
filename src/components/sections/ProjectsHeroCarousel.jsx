import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import meadowlarkImage from '../../assets/Meadowlark Monarch 1.avif';
import plazaImage from '../../assets/Plaza Of The Flint Hills 2.avif';
import rileyCountyImage from '../../assets/riley county grade school.png';
import indianHillsImage from '../../assets/Indian Hills Topeka.avif';

const ProjectsHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hardcoded project images for hero carousel
  const heroImages = [
    {
      id: 1,
      image: meadowlarkImage,
      alt: 'Meadowlark MHK Project'
    },
    {
      id: 2,
      image: plazaImage,
      alt: 'Plaza of the Flint Hills Project'
    },
    {
      id: 3,
      image: rileyCountyImage,
      alt: 'Riley County Grade School Project'
    },
    {
      id: 4,
      image: indianHillsImage,
      alt: 'Indian Hills Topeka Project'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Carousel Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {heroImages.map((item) => (
          <div 
            key={item.id}
            className="min-w-full h-full relative"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {heroImages.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectsHeroCarousel;
