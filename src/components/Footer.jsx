import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Perry Electrical</h3>
            <p>Serving Northeast Kansas with professional electrical services for over 15 years.</p>
            <div className="contact-info">
              <p>📞 (785) 555-0123</p>
              <p>✉️ info@perryelectrical.com</p>
              <p>📍 Topeka, Kansas</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/service">Electrical Service</Link></li>
              <li><Link to="/services">Panel Upgrades</Link></li>
              <li><Link to="/services">Lighting Installation</Link></li>
              <li><Link to="/services">Generator Installation</Link></li>
              <li><Link to="/services">EV Charger Installation</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Construction</h4>
            <ul>
              <li><Link to="/commercial-construction">Commercial Construction</Link></li>
              <li><Link to="/residential-construction">Residential Construction</Link></li>
              <li><Link to="/projects">Featured Projects</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/employment">Employment</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Service</Link>
              <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Google Reviews">⭐</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Perry Electrical. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/terms">Terms</Link>
              <Link to="/contact">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
