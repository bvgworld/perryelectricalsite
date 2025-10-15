import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
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
          <h1 className="font-heading font-bold uppercase text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Electrical Contracting for Commercial, Industrial & Institutional Builds
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            We love to build — relationships, solutions, futures.
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

