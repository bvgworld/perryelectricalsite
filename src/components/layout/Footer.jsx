import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import Container from '../ui/Container';

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
              <h3 className="text-xl font-heading font-bold mb-4">
                PERRY ELECTRICAL
              </h3>
              <p className="text-gray-300 mb-4">
                Electrical contracting for commercial, industrial, and institutional builds across Kansas.
              </p>
              <div className="flex items-center gap-2 text-secondary-green">
                <Shield size={20} />
                <span className="text-sm font-semibold">Lifetime Guarantee</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-secondary-green transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-secondary-green transition-colors">
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
                  <Link to="/services/panel-upgrades" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Panel Upgrades
                  </Link>
                </li>
                <li>
                  <Link to="/services/ev-chargers" className="text-gray-300 hover:text-secondary-green transition-colors">
                    EV Chargers
                  </Link>
                </li>
                <li>
                  <Link to="/services/lighting" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Lighting
                  </Link>
                </li>
                <li>
                  <Link to="/services/generators" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Generators
                  </Link>
                </li>
                <li>
                  <Link to="/services/tripping-breaker" className="text-gray-300 hover:text-secondary-green transition-colors">
                    Tripping Breaker
                  </Link>
                </li>
                <li>
                  <Link to="/services/outlets" className="text-gray-300 hover:text-secondary-green transition-colors">
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
                  <Phone size={20} className="text-secondary-green flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">Call us today</p>
                    <a href="tel:+1234567890" className="text-white font-semibold hover:text-secondary-green transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-secondary-green flex-shrink-0 mt-1" />
                  <div>
                    <a href="mailto:info@perryelec.com" className="text-gray-300 hover:text-secondary-green transition-colors">
                      info@perryelec.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-secondary-green flex-shrink-0 mt-1" />
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

