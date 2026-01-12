import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../assets/PE LOGO Cropped (1).png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-dark text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <img 
                src={logo} 
                alt="Perry Electrical" 
                className="h-12 w-auto mb-4 object-contain"
              />
              <p className="text-gray-300 mb-4">
                Electrical contracting for commercial, industrial, and institutional builds across Kansas.
              </p>
              <div className="flex items-center gap-2 text-accent-red">
                <Shield size={20} />
                <span className="text-sm font-semibold">Lifetime Guarantee</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-accent-red transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-accent-red transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 hover:text-accent-red transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-accent-red transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-accent-red transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/panel-upgrades" className="text-gray-300 hover:text-accent-red transition-colors">
                    Panel Upgrades
                  </Link>
                </li>
                <li>
                  <Link to="/services/ev-chargers" className="text-gray-300 hover:text-accent-red transition-colors">
                    EV Chargers
                  </Link>
                </li>
                <li>
                  <Link to="/services/lighting" className="text-gray-300 hover:text-accent-red transition-colors">
                    Lighting
                  </Link>
                </li>
                <li>
                  <Link to="/services/generators" className="text-gray-300 hover:text-accent-red transition-colors">
                    Generators
                  </Link>
                </li>
                <li>
                  <Link to="/services/tripping-breaker" className="text-gray-300 hover:text-accent-red transition-colors">
                    Tripping Breaker
                  </Link>
                </li>
                <li>
                  <Link to="/services/outlets" className="text-gray-300 hover:text-accent-red transition-colors">
                    Outlets
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-accent-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">Call us today</p>
                    <a href="tel:+1234567890" className="text-white font-semibold hover:text-accent-red transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-accent-red flex-shrink-0 mt-1" />
                  <div>
                    <a href="mailto:info@perryelec.com" className="text-gray-300 hover:text-accent-red transition-colors">
                      info@perryelec.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">Serving Kansas</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Perry Electrical. All rights reserved.</p>
            <p>Licensed & Insured | Kansas License #XXXXX</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

