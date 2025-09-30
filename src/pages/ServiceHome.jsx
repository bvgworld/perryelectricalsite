import { Link } from 'react-router-dom'
import serviceImage from '../assets/service home image.jpeg'
import './ServiceHome.css'

const ServiceHome = () => {
  return (
    <div className="service-home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${serviceImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Electrical Service & Repair</h1>
            <p>Fast, reliable electrical services for your home or business. Available 24/7 for emergencies.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-large">Request Service</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Call (785) 555-0123</Link>
            </div>
            <div className="hero-features">
              <div className="feature">
                <span className="icon">⚡</span>
                <span>24/7 Emergency Service</span>
              </div>
              <div className="feature">
                <span className="icon">✅</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="feature">
                <span className="icon">⭐</span>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Banner */}
      <section className="emergency-banner">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>⚡ Electrical Emergency?</h2>
              <p>Don't wait - call us now for immediate assistance</p>
            </div>
            <div className="emergency-cta">
              <a href="tel:7855550123" className="btn btn-primary btn-large">Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Electrical Services</h2>
            <p>Comprehensive electrical solutions for residential and commercial properties</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Panel Upgrades</h3>
              <p>Modernize your electrical panel for increased capacity, safety, and efficiency. Perfect for older homes or growing electrical needs.</p>
              <ul className="service-features">
                <li>200-400 amp service upgrades</li>
                <li>Circuit breaker replacements</li>
                <li>GFCI outlet installation</li>
                <li>Code compliance updates</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Lighting Installation</h3>
              <p>Professional lighting solutions for indoor and outdoor spaces. From simple fixture replacements to complete lighting systems.</p>
              <ul className="service-features">
                <li>Indoor lighting fixtures</li>
                <li>Outdoor security lighting</li>
                <li>LED upgrades</li>
                <li>Smart lighting systems</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>EV Charger Installation</h3>
              <p>Level 2 charging stations for electric vehicles. Professional installation with proper permits and inspections.</p>
              <ul className="service-features">
                <li>Level 2 charging stations</li>
                <li>Hardwired installations</li>
                <li>Permit handling</li>
                <li>Smart charging features</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Electrical Repairs</h3>
              <p>Quick fixes for outlets, switches, and electrical issues. Same-day service available for most repairs.</p>
              <ul className="service-features">
                <li>Outlet and switch repairs</li>
                <li>Circuit troubleshooting</li>
                <li>Wiring repairs</li>
                <li>Safety inspections</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Home Electrical Inspections</h3>
              <p>Comprehensive electrical safety inspections for home buyers, sellers, and homeowners concerned about safety.</p>
              <ul className="service-features">
                <li>Pre-purchase inspections</li>
                <li>Safety assessments</li>
                <li>Code compliance checks</li>
                <li>Detailed reports</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>Generator Installation</h3>
              <p>Backup power solutions for your home or business. Automatic transfer switches and professional installation.</p>
              <ul className="service-features">
                <li>Standby generators</li>
                <li>Transfer switches</li>
                <li>Maintenance programs</li>
                <li>Emergency backup power</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Perry Electrical?</h2>
            <p>Experience, reliability, and customer satisfaction for over 15 years</p>
          </div>
          <div className="why-choose-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed electrical contractors with comprehensive insurance coverage for your peace of mind.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⚡</div>
              <h3>24/7 Emergency Service</h3>
              <p>Electrical emergencies don't wait for business hours. We're available around the clock for urgent repairs.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⭐</div>
              <h3>5-Star Rated</h3>
              <p>Consistently rated 5 stars by our customers. Quality workmanship and exceptional customer service.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔧</div>
              <h3>15+ Years Experience</h3>
              <p>Over 15 years serving Northeast Kansas with professional electrical services and construction projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <div className="service-areas">
            <div className="areas-content">
              <h2>Service Areas</h2>
              <p>We proudly serve Northeast Kansas including:</p>
              <div className="areas-grid">
                <div className="area">
                  <h4>Topeka</h4>
                  <p>Full electrical services</p>
                </div>
                <div className="area">
                  <h4>Lawrence</h4>
                  <p>Residential & commercial</p>
                </div>
                <div className="area">
                  <h4>Manhattan</h4>
                  <p>Emergency service available</p>
                </div>
                <div className="area">
                  <h4>Junction City</h4>
                  <p>Construction projects</p>
                </div>
                <div className="area">
                  <h4>Emporia</h4>
                  <p>Panel upgrades & repairs</p>
                </div>
                <div className="area">
                  <h4>And surrounding areas</h4>
                  <p>Call to confirm service</p>
                </div>
              </div>
            </div>
            <div className="areas-cta">
              <Link to="/contact" className="btn btn-primary btn-large">Get Service Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Need Electrical Service?</h2>
            <p>Don't wait - contact us today for fast, reliable electrical service</p>
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

export default ServiceHome
