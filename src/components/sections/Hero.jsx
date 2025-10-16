import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  const words = ['Relationships', 'Careers', 'Solutions'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showWord, setShowWord] = useState(true);

  useEffect(() => {
    if (currentWordIndex >= words.length) {
      // Stop cycling after all words have been shown
      setShowWord(false);
      return;
    }

    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1250); // Show word for 1.25 seconds

    const changeWordTimer = setTimeout(() => {
      setCurrentWordIndex(prev => prev + 1);
      setIsVisible(true);
    }, 1500); // Total cycle time of 1.5 seconds (1.25s visible + 0.25s fade)

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeWordTimer);
    };
  }, [currentWordIndex, words.length]);
  return (
    <section className="relative bg-accent-dark text-white py-24 md:py-40 lg:py-48 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/98 to-accent-dark/90 z-10" />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      />
      
      <Container variant="wide" className="relative z-20">
        <div className="max-w-5xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            We Love to Build{' '}
            {showWord && currentWordIndex < words.length && (
              <span
                className="inline-block transition-opacity duration-500"
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                {words[currentWordIndex]}
              </span>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-medium tracking-wide">
            Electrical contracting for commercial, industrial, and institutional builds
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="group">
              Get a Project Bid
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              See Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

