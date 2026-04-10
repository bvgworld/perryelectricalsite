import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTABanner = ({ title, subtitle, buttonText = 'Get Started', variant = 'blue', onButtonClick }) => {
  const variants = {
    blue: 'bg-primary-blue',
    dark: 'bg-accent-dark',
    silver: 'bg-accent-medium',
  };

  const bgClass = variants[variant] || variants.blue;
  
  const textColor = variant === 'silver' ? 'text-accent-dark' : 'text-white';
  const subtitleColor = variant === 'silver' ? 'text-accent-dark/70' : 'text-white/70';

  return (
    <section className={`py-12 md:py-14 ${bgClass}`}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className={`text-2xl md:text-3xl font-heading ${textColor}`} style={{ letterSpacing: '0.02em', marginBottom: subtitle ? 6 : 0 }}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-base ${subtitleColor}`}>
                {subtitle}
              </p>
            )}
          </div>
          <Button 
            variant="secondary"
            size="lg"
            onClick={onButtonClick}
            className="whitespace-nowrap bg-white text-accent-dark border-0 hover:bg-gray-100 shrink-0"
          >
            {buttonText}
            <ArrowRight size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTABanner;
