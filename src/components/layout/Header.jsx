import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Container from '../ui/Container';
import logoHero from '../../assets/PE BG NAVY_TRANS FINAL (1).png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Employment' },
  ];

  const isActive = (path) => location.pathname === path;

  // Determine if we're on the homepage (transparent header over hero)
  const isHomePage = location.pathname === '/';
  const showTransparent = isHomePage && !isScrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent 
          ? 'bg-transparent overflow-visible' 
          : 'bg-white/[0.97] backdrop-blur-md border-b border-black/[0.06] shadow-sm overflow-x-hidden'
      }`}
    >
      <Container className={showTransparent ? 'overflow-visible' : ''}>
        <div
          className={`flex items-center justify-between ${
            showTransparent ? 'h-[88px] lg:h-[96px]' : 'h-[72px]'
          }`}
        >
          <Link
            to="/"
            className="relative z-10 flex shrink-0 items-center overflow-visible py-2"
          >
            <img
              src={logoHero}
              alt="Perry Electrical"
              className={`w-auto object-contain object-left origin-left ${
                showTransparent
                  ? 'h-12 scale-[2.35] sm:scale-[2.65] lg:scale-[2.95]'
                  : 'h-12 max-w-[min(100%,280px)] scale-[2.05] sm:scale-[2.2]'
              }`}
              style={showTransparent ? undefined : { filter: 'brightness(0) saturate(100%) invert(33%) sepia(94%) saturate(2623%) hue-rotate(217deg) brightness(98%) contrast(97%)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? showTransparent ? 'text-white' : 'text-primary-blue'
                    : showTransparent 
                      ? 'text-white/80 hover:text-white' 
                      : 'text-text-dark/70 hover:text-text-dark'
                }`}
                style={{ letterSpacing: '0.01em' }}
              >
                {link.label}
              </Link>
            ))}
            
            <a 
              href="tel:+17855394723"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                showTransparent ? 'text-white' : 'text-primary-blue'
              }`}
            >
              <Phone size={14} />
              (785) 539-4723
            </a>
          </nav>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+17855394723"
              className={`p-2 transition-colors ${showTransparent ? 'text-white' : 'text-primary-blue'}`}
              aria-label="Call Perry Electrical"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${showTransparent ? 'text-white' : 'text-text-dark'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100 bg-white rounded-b-lg shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2.5 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-blue'
                    : 'text-text-dark hover:text-primary-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+17855394723"
              className="mt-3 flex items-center justify-center gap-2 bg-accent-red text-white px-6 py-2.5 rounded-lg font-medium text-sm"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
