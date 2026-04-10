import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../assets/PE BG NAVY_TRANS FINAL (1).png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-dark text-white">
      <Container>
        <div className="py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div>
              <Link to="/" className="inline-block mb-4">
                <img 
                  src={logo} 
                  alt="Perry Electrical" 
                  className="h-20 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Electrical contracting for commercial, industrial, and institutional builds across Kansas.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-red/10 rounded-full">
                <span className="text-accent-red text-xs font-bold uppercase tracking-wider">Lifetime Guarantee</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4 font-sans">Company</h4>
              <ul className="space-y-2.5">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/projects', label: 'Projects' },
                  { to: '/services', label: 'Services' },
                  { to: '/about', label: 'About' },
                  { to: '/careers', label: 'Careers' },
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-white/60 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4 font-sans">Services</h4>
              <ul className="space-y-2.5">
                {[
                  { to: '/services/panel-upgrades', label: 'Panel Upgrades' },
                  { to: '/services/ev-chargers', label: 'EV Chargers' },
                  { to: '/services/interior-lighting', label: 'Interior Lighting' },
                  { to: '/services/generators', label: 'Generators' },
                  { to: '/services/tripping-breaker', label: 'Tripping Breaker' },
                  { to: '/services/outlets', label: 'Outlets' },
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-white/60 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4 font-sans">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+17855394723" className="flex items-center gap-2 text-white font-semibold text-[15px] hover:text-primary-blue transition-colors">
                  <Phone size={14} className="text-white/40" />
                  (785) 539-4723
                </a>
                <a href="mailto:info@perryelec.com" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                  <Mail size={14} className="text-white/40" />
                  info@perryelec.com
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-white/40 mt-0.5 flex-shrink-0" />
                  <p className="text-white/40 text-sm leading-relaxed">
                    116 N 6th St, St. Marys, KS 66536<br />
                    Serving Manhattan, Topeka & Surrounding Areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
            <p>© {currentYear} Perry Electrical. All rights reserved.</p>
            <p>Licensed & Insured</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
