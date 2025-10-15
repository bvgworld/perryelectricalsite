import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Employment' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading font-bold text-2xl text-primary-blue">
              PERRY ELECTRICAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-primary-blue'
                    : 'text-text-dark hover:text-primary-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Now Button */}
          <div className="hidden lg:block">
            <Button 
              variant="secondary" 
              size="md"
              className="flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-tertiary-light">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-blue'
                    : 'text-text-dark hover:text-primary-blue'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button 
                variant="secondary" 
                size="md"
                className="w-full flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;

