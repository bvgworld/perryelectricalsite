import { ArrowRight, Check } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import teamImage from '../../assets/tight team picture.jpg';

const CoreValues = ({ onOpenBidModal }) => {
  const values = [
    'We Expect Excellence',
    'We Work Hard, We Work Smart',
    'We Are Always Learning',
    'We Have Grit',
  ];

  return (
    <section className="py-16 md:py-20 bg-accent-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_16fr] gap-12 items-center">
          <div className="aspect-[16/10] lg:aspect-[3/2] rounded-xl overflow-hidden">
            <img
              src={teamImage}
              alt="The Perry Electrical team"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-heading text-white tracking-[0.02em] mb-5">
              We Build More Than Wires
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed mb-8">
              Perry Electrical was founded on a passion for building — teams, relationships, careers, and solutions. We back every job with our lifetime guarantee.
            </p>

            <div className="flex flex-col gap-3">
              {values.map(v => (
                <div key={v} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-primary-blue/15 flex items-center justify-center flex-shrink-0">
                    <Check size={13} className="text-primary-blue" />
                  </div>
                  <span className="text-sm font-medium text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 lg:mt-12">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => onOpenBidModal?.()}
          >
            Contact Our Team
            <ArrowRight size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
