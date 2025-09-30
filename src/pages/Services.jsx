import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive electrical solutions for residential and commercial properties</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-category">
              <div className="category-header">
                <div className="category-icon">⚡</div>
                <h2>Electrical Service & Repair</h2>
                <p>Fast, reliable electrical services for your home or business</p>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <h3>Panel Upgrades</h3>
                  <p>Modernize your electrical panel for increased capacity and safety</p>
                </div>
                <div className="service-item">
                  <h3>Lighting Installation</h3>
                  <p>Professional lighting solutions for indoor and outdoor spaces</p>
                </div>
                <div className="service-item">
                  <h3>EV Charger Installation</h3>
                  <p>Level 2 charging stations for electric vehicles</p>
                </div>
                <div className="service-item">
                  <h3>Electrical Repairs</h3>
                  <p>Quick fixes for outlets, switches, and electrical issues</p>
                </div>
                <div className="service-item">
                  <h3>Generator Installation</h3>
                  <p>Backup power solutions for your home or business</p>
                </div>
                <div className="service-item">
                  <h3>Home Inspections</h3>
                  <p>Electrical safety inspections for home buyers and sellers</p>
                </div>
              </div>
              <Link to="/service" className="btn btn-primary">Learn More</Link>
            </div>

            <div className="service-category">
              <div className="category-header">
                <div className="category-icon">🏗️</div>
                <h2>Construction Services</h2>
                <p>Professional electrical contracting for new construction and renovations</p>
              </div>
              <div className="service-list">
                <div className="service-item">
                  <h3>New Construction</h3>
                  <p>Complete electrical systems for new buildings</p>
                </div>
                <div className="service-item">
                  <h3>Commercial Construction</h3>
                  <p>Electrical systems for offices, retail, and industrial facilities</p>
                </div>
                <div className="service-item">
                  <h3>Residential Construction</h3>
                  <p>Custom electrical systems for new homes</p>
                </div>
                <div className="service-item">
                  <h3>Renovations</h3>
                  <p>Electrical upgrades for existing buildings</p>
                </div>
                <div className="service-item">
                  <h3>Smart Home Systems</h3>
                  <p>Modern home automation and smart technology</p>
                </div>
                <div className="service-item">
                  <h3>Outdoor Electrical</h3>
                  <p>Landscape lighting and outdoor electrical systems</p>
                </div>
              </div>
              <div className="category-cta">
                <Link to="/commercial-construction" className="btn btn-primary">Commercial</Link>
                <Link to="/residential-construction" className="btn btn-secondary">Residential</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="section section-light">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>⚡ 24/7 Emergency Service</h2>
              <p>Electrical emergencies don't wait for business hours. We're available around the clock for urgent repairs and safety issues.</p>
              <div className="emergency-features">
                <div className="emergency-feature">
                  <span className="icon">📞</span>
                  <span>24/7 Emergency Line</span>
                </div>
                <div className="emergency-feature">
                  <span className="icon">⚡</span>
                  <span>Fast Response Time</span>
                </div>
                <div className="emergency-feature">
                  <span className="icon">🛡️</span>
                  <span>Safety First</span>
                </div>
              </div>
            </div>
            <div className="emergency-cta">
              <a href="tel:7855550123" className="btn btn-primary btn-large">Call (785) 555-0123</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Service Areas</h2>
            <p>We proudly serve Northeast Kansas</p>
          </div>
          <div className="areas-grid">
            <div className="area-card">
              <h3>Topeka</h3>
              <p>Full electrical services for residential and commercial properties</p>
            </div>
            <div className="area-card">
              <h3>Lawrence</h3>
              <p>Emergency service and construction projects</p>
            </div>
            <div className="area-card">
              <h3>Manhattan</h3>
              <p>Industrial and commercial electrical work</p>
            </div>
            <div className="area-card">
              <h3>Junction City</h3>
              <p>Residential construction and service work</p>
            </div>
            <div className="area-card">
              <h3>Emporia</h3>
              <p>Panel upgrades and electrical repairs</p>
            </div>
            <div className="area-card">
              <h3>Surrounding Areas</h3>
              <p>Call to confirm service availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Need Electrical Service?</h2>
            <p>Contact us today for fast, reliable electrical service</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Request Service</Link>
              <a href="tel:7855550123" className="btn btn-secondary btn-large">Call (785) 555-0123</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
