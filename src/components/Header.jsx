import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Perry Electrical</h1>
            <span className="tagline">Serving Northeast Kansas</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li className="dropdown">
                <span>Services</span>
                <ul className="dropdown-menu">
                  <li><Link to="/service" onClick={() => setIsMenuOpen(false)}>Service Home</Link></li>
                  <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>All Services</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <span>Construction</span>
                <ul className="dropdown-menu">
                  <li><Link to="/commercial-construction" onClick={() => setIsMenuOpen(false)}>Commercial</Link></li>
                  <li><Link to="/residential-construction" onClick={() => setIsMenuOpen(false)}>Residential</Link></li>
                </ul>
              </li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/employment" onClick={() => setIsMenuOpen(false)}>Employment</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          <div className="header-cta">
            <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            <Link to="/contact" className="btn btn-secondary">Call Now</Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
