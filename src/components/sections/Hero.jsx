import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = ({ onOpenBidModal }) => {
  const words = ['', 'Relationships', 'Careers', 'Solutions'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentWordIndex >= words.length) return;
    const fadeOut = setTimeout(() => setIsVisible(false), 1400);
    const change = setTimeout(() => {
      setCurrentWordIndex(prev => prev + 1);
      setIsVisible(true);
    }, 1700);
    return () => { clearTimeout(fadeOut); clearTimeout(change); };
  }, [currentWordIndex, words.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-accent-dark overflow-hidden">
      {/* Subtle grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Left accent line */}
      <div className="absolute left-0 top-[15%] bottom-[15%] w-1"
        style={{ background: 'linear-gradient(180deg, transparent, #2C64F2, transparent)' }}
      />

      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      />

      <Container className="relative z-10">
        <div className="max-w-[780px] pt-10">
          {/* Guarantee badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <ShieldCheck size={14} className="text-white/70" />
            <span className="text-[13px] font-semibold text-white/90 tracking-wider uppercase">
              Lifetime Guarantee on Every Project
            </span>
          </div>

          {/* Headline with word animation */}
          <div className="relative mb-6">
            <h1 className="font-heading text-[clamp(40px,6vw,72px)] text-white leading-[1.05] tracking-[0.02em] whitespace-nowrap">
              We Love To Build
            </h1>
            <h1 
              className="font-heading text-[clamp(40px,6vw,72px)] text-white leading-[1.05] tracking-[0.02em] absolute top-0 left-0 transition-opacity duration-[400ms] whitespace-nowrap"
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              {words[currentWordIndex] ? `We Love To Build ${words[currentWordIndex]}` : 'We Love To Build'}
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/50 max-w-[560px] mb-10 leading-relaxed font-normal">
            Electrical contracting for commercial, industrial, and institutional builds across Kansas.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => onOpenBidModal?.()}
            >
              Talk to an Estimator
              <ArrowRight size={15} />
            </Button>
            
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md border border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              See Our Work
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-16 mt-16 pt-8 border-t border-white/[0.08] text-center">
            {[
              { num: '20+', label: 'Years Experience' },
              { num: '5.0', label: 'Google Rating' },
              { num: '100%', label: 'Licensed & Insured' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-heading text-[32px] text-white tracking-[0.02em]">{stat.num}</div>
                <div className="text-xs text-white/40 uppercase tracking-[0.08em] font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Subtle radial glow */}
      <div className="absolute -right-[100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(44,100,242,0.03) 0%, transparent 70%)' }}
      />
    </section>
  );
};

export default Hero;
