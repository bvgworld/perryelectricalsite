import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import ProjectBidModal from '../modals/ProjectBidModal';

const Hero = () => {
  const words = ['', 'Relationships', 'Careers', 'Solutions']; // Start with empty string
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  // Modal states
  const [isBidModalOpen, setIsBidModalOpen] = useState(false);

  useEffect(() => {
    if (currentWordIndex >= words.length) {
      // Stop cycling after all words have been shown
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
    <section className="relative bg-accent-dark text-white py-[110.4px] md:py-[184px] lg:py-[220.8px] overflow-hidden">
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
          <div className="relative mb-6">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight whitespace-nowrap">
              We Love To Build
            </h1>
            <h1 
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight transition-opacity duration-500 whitespace-nowrap absolute top-0 left-0"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              {words[currentWordIndex] ? `We Love To Build ${words[currentWordIndex]}` : 'We Love To Build'}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-medium tracking-wide">
            Electrical contracting for commercial, industrial, and institutional builds
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="group"
              onClick={() => setIsBidModalOpen(true)}
            >
              Talk to an Estimator
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Link
              to="/projects"
              className="inline-flex items-center justify-center font-semibold rounded transition-all duration-300 cursor-pointer px-8 py-2.5 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue group"
            >
              See Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </Container>
      
      {/* Modals */}
      <ProjectBidModal 
        isOpen={isBidModalOpen} 
        onClose={() => setIsBidModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;

