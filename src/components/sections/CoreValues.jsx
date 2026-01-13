import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import teamImage from '../../assets/tight team picture.jpg';

const CoreValues = () => {
  return (
    <section className="section-padding bg-accent-dark text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <div>
            <div className="h-96 lg:h-[500px] xl:h-[600px] rounded-md overflow-hidden">
              <img
                src={teamImage}
                alt="Perry Electrical Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              We Build More Than Wires
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              At Perry Electrical, we believe in building lasting relationships alongside exceptional electrical systems. Our team combines technical expertise with genuine care for every project we touch.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From our first conversation to final inspection, we're committed to transparency, quality, and your complete satisfaction. That's why we back every job with our lifetime guarantee.
            </p>
            <Button variant="primary" size="lg" className="group">
              Contact Our Estimating Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;

