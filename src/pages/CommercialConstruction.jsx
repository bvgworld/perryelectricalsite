import { Link } from 'react-router-dom'
import './CommercialConstruction.css'

const CommercialConstruction = () => {
  return (
    <div className="commercial-construction">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Commercial Electrical Construction</h1>
            <p>Professional electrical contracting for commercial buildings, offices, retail spaces, and industrial facilities.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-large">Get Project Quote</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Schedule Consultation</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">200+</span>
                <span className="label">Commercial Projects</span>
              </div>
              <div className="stat">
                <span className="number">15</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="number">100%</span>
                <span className="label">On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Commercial Electrical Services</h2>
            <p>Complete electrical solutions for commercial construction and renovation projects</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>New Construction</h3>
              <p>Complete electrical systems for new commercial buildings, from design to final inspection.</p>
              <ul className="service-features">
                <li>Electrical system design</li>
                <li>Power distribution</li>
                <li>Lighting systems</li>
                <li>Fire safety systems</li>
                <li>Code compliance</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Renovations & Upgrades</h3>
              <p>Modernize existing commercial spaces with updated electrical systems and energy-efficient solutions.</p>
              <ul className="service-features">
                <li>Panel upgrades</li>
                <li>LED lighting retrofits</li>
                <li>Smart building systems</li>
                <li>Energy efficiency improvements</li>
                <li>Tenant improvements</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Power Distribution</h3>
              <p>High-capacity electrical distribution systems for large commercial and industrial facilities.</p>
              <ul className="service-features">
                <li>Main electrical rooms</li>
                <li>Sub-panel installations</li>
                <li>High-voltage systems</li>
                <li>Backup power systems</li>
                <li>Load calculations</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Commercial Lighting</h3>
              <p>Professional lighting solutions for offices, retail spaces, warehouses, and outdoor areas.</p>
              <ul className="service-features">
                <li>Office lighting systems</li>
                <li>Retail display lighting</li>
                <li>Warehouse lighting</li>
                <li>Parking lot lighting</li>
                <li>Emergency lighting</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>Data & Communications</h3>
              <p>Structured cabling and data infrastructure for modern commercial buildings.</p>
              <ul className="service-features">
                <li>Network cabling</li>
                <li>Fiber optic installation</li>
                <li>Security systems</li>
                <li>Access control</li>
                <li>Audio/visual systems</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Safety Systems</h3>
              <p>Fire safety, emergency systems, and code compliance for commercial buildings.</p>
              <ul className="service-features">
                <li>Fire alarm systems</li>
                <li>Emergency lighting</li>
                <li>Exit signs</li>
                <li>Code compliance</li>
                <li>Safety inspections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Construction Process</h2>
            <p>From initial consultation to final inspection, we ensure every project meets the highest standards</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>We meet with you to understand your project requirements, timeline, and budget constraints.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Design & Planning</h3>
                <p>Our team creates detailed electrical plans, obtains permits, and coordinates with other trades.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Material Procurement</h3>
                <p>We source high-quality materials and equipment from trusted suppliers to ensure project success.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Installation</h3>
                <p>Professional installation by our licensed electricians with minimal disruption to your business.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Testing & Inspection</h3>
                <p>Comprehensive testing and inspection to ensure all systems meet code requirements and function properly.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Project Completion</h3>
                <p>Final walkthrough, documentation, and ongoing support for your new electrical systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Commercial Projects</h2>
            <p>Recent commercial electrical construction projects across Northeast Kansas</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏢</div>
              </div>
              <div className="project-content">
                <h3>Office Building Complex</h3>
                <p>Complete electrical system for 50,000 sq ft office building including power distribution, lighting, and data infrastructure.</p>
                <div className="project-details">
                  <span className="detail">📍 Topeka, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">⚡ 400A Service</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏪</div>
              </div>
              <div className="project-content">
                <h3>Retail Shopping Center</h3>
                <p>Electrical installation for multi-tenant retail space with individual metering and modern lighting systems.</p>
                <div className="project-details">
                  <span className="detail">📍 Lawrence, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">⚡ 200A Service</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏭</div>
              </div>
              <div className="project-content">
                <h3>Manufacturing Facility</h3>
                <p>High-capacity electrical system for industrial facility with specialized equipment and safety systems.</p>
                <div className="project-details">
                  <span className="detail">📍 Manhattan, KS</span>
                  <span className="detail">📅 2023</span>
                  <span className="detail">⚡ 800A Service</span>
                </div>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn btn-primary btn-large">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Perry Electrical for Commercial Projects?</h2>
            <p>Professional electrical contracting with a track record of success</p>
          </div>
          <div className="why-choose-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Licensed & Bonded</h3>
              <p>Fully licensed electrical contractors with comprehensive bonding and insurance coverage.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⏰</div>
              <h3>On-Time Delivery</h3>
              <p>We understand commercial deadlines and deliver projects on schedule, every time.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📋</div>
              <h3>Code Compliance</h3>
              <p>All work meets or exceeds local building codes and electrical standards.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Project Management</h3>
              <p>Dedicated project managers coordinate all aspects of your electrical installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Commercial Project?</h2>
            <p>Contact us today for a detailed consultation and project estimate</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Project Quote</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommercialConstruction
