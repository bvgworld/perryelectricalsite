import { Link } from 'react-router-dom'
import './ResidentialConstruction.css'

const ResidentialConstruction = () => {
  return (
    <div className="residential-construction">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Residential Electrical Construction</h1>
            <p>Custom electrical solutions for new homes, renovations, and smart home installations across Northeast Kansas.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-large">Get Home Quote</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Schedule Consultation</Link>
            </div>
            <div className="hero-features">
              <div className="feature">
                <span className="icon">🏠</span>
                <span>Custom Home Wiring</span>
              </div>
              <div className="feature">
                <span className="icon">🔌</span>
                <span>Smart Home Systems</span>
              </div>
              <div className="feature">
                <span className="icon">⚡</span>
                <span>EV Charger Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Residential Electrical Services</h2>
            <p>Complete electrical solutions for your home construction and renovation projects</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>New Home Construction</h3>
              <p>Complete electrical systems for new residential construction, from foundation to final inspection.</p>
              <ul className="service-features">
                <li>Electrical rough-in</li>
                <li>Panel installation</li>
                <li>Outlet and switch placement</li>
                <li>Lighting fixture installation</li>
                <li>Code compliance</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Home Renovations</h3>
              <p>Electrical upgrades and modifications for existing homes, including kitchen and bathroom renovations.</p>
              <ul className="service-features">
                <li>Kitchen electrical upgrades</li>
                <li>Bathroom GFCI installation</li>
                <li>Panel upgrades</li>
                <li>Additional circuits</li>
                <li>Safety improvements</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Smart Home Systems</h3>
              <p>Modern smart home electrical infrastructure for automation, security, and energy efficiency.</p>
              <ul className="service-features">
                <li>Smart switches and outlets</li>
                <li>Home automation wiring</li>
                <li>Security system integration</li>
                <li>Smart lighting controls</li>
                <li>Network infrastructure</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>EV Charger Installation</h3>
              <p>Level 2 charging stations for electric vehicles with proper permits and safety compliance.</p>
              <ul className="service-features">
                <li>Level 2 charging stations</li>
                <li>Hardwired installations</li>
                <li>Permit handling</li>
                <li>Load calculations</li>
                <li>Future-proofing</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Outdoor Lighting</h3>
              <p>Landscape lighting, security lighting, and outdoor electrical systems for your home.</p>
              <ul className="service-features">
                <li>Landscape lighting</li>
                <li>Security lighting</li>
                <li>Outdoor outlets</li>
                <li>Pool and spa electrical</li>
                <li>Holiday lighting systems</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔋</div>
              <h3>Generator Systems</h3>
              <p>Backup power solutions for your home with automatic transfer switches and professional installation.</p>
              <ul className="service-features">
                <li>Standby generators</li>
                <li>Transfer switches</li>
                <li>Load management</li>
                <li>Maintenance programs</li>
                <li>Emergency backup power</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Home Construction Process */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Home Construction Process</h2>
            <p>From planning to completion, we ensure your home's electrical system meets all your needs</p>
          </div>
          <div className="construction-phases">
            <div className="phase">
              <div className="phase-number">1</div>
              <div className="phase-content">
                <h3>Planning & Design</h3>
                <p>We work with you and your builder to design an electrical system that meets your current needs and future plans.</p>
                <ul className="phase-features">
                  <li>Electrical load calculations</li>
                  <li>Code compliance planning</li>
                  <li>Future expansion planning</li>
                  <li>Smart home preparation</li>
                </ul>
              </div>
            </div>
            <div className="phase">
              <div className="phase-number">2</div>
              <div className="phase-content">
                <h3>Rough-In Installation</h3>
                <p>Electrical rough-in work including wiring, boxes, and panel installation before drywall.</p>
                <ul className="phase-features">
                  <li>Electrical panel installation</li>
                  <li>Wire routing and protection</li>
                  <li>Outlet and switch boxes</li>
                  <li>Lighting fixture boxes</li>
                </ul>
              </div>
            </div>
            <div className="phase">
              <div className="phase-number">3</div>
              <div className="phase-content">
                <h3>Final Installation</h3>
                <p>Installation of fixtures, outlets, switches, and final connections after drywall and paint.</p>
                <ul className="phase-features">
                  <li>Lighting fixture installation</li>
                  <li>Outlet and switch installation</li>
                  <li>Appliance connections</li>
                  <li>Final testing and inspection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Features */}
      <section className="section">
        <div className="container">
          <div className="smart-home-content">
            <div className="smart-home-text">
              <h2>Smart Home Ready</h2>
              <p>We design and install electrical systems that are ready for today's smart home technology and future innovations.</p>
              <div className="smart-features">
                <div className="smart-feature">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h4>Smart Controls</h4>
                    <p>Pre-wired for smart switches, dimmers, and home automation systems</p>
                  </div>
                </div>
                <div className="smart-feature">
                  <div className="feature-icon">🔌</div>
                  <div className="feature-content">
                    <h4>USB Outlets</h4>
                    <p>Modern outlets with built-in USB charging for your devices</p>
                  </div>
                </div>
                <div className="smart-feature">
                  <div className="feature-icon">🌐</div>
                  <div className="feature-content">
                    <h4>Network Infrastructure</h4>
                    <p>Structured cabling for reliable internet and smart home connectivity</p>
                  </div>
                </div>
                <div className="smart-feature">
                  <div className="feature-icon">🔋</div>
                  <div className="feature-content">
                    <h4>EV Charging</h4>
                    <p>Pre-wired for electric vehicle charging stations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="smart-home-image">
              <div className="image-placeholder">🏠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Featured Residential Projects</h2>
            <p>Recent home electrical construction projects across Northeast Kansas</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏠</div>
              </div>
              <div className="project-content">
                <h3>Custom Smart Home</h3>
                <p>Complete electrical system for 3,500 sq ft custom home with smart home automation and EV charging.</p>
                <div className="project-details">
                  <span className="detail">📍 Topeka, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">⚡ 200A Service</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏡</div>
              </div>
              <div className="project-content">
                <h3>Kitchen Renovation</h3>
                <p>Complete kitchen electrical upgrade with modern outlets, lighting, and smart home integration.</p>
                <div className="project-details">
                  <span className="detail">📍 Lawrence, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">💡 LED Lighting</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏘️</div>
              </div>
              <div className="project-content">
                <h3>Subdivision Development</h3>
                <p>Electrical installation for 25 new homes in residential subdivision with modern electrical standards.</p>
                <div className="project-details">
                  <span className="detail">📍 Manhattan, KS</span>
                  <span className="detail">📅 2023</span>
                  <span className="detail">🏗️ 25 Homes</span>
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
            <h2>Why Choose Perry Electrical for Your Home?</h2>
            <p>Professional residential electrical construction with attention to detail</p>
          </div>
          <div className="why-choose-grid">
            <div className="why-card">
              <div className="why-icon">🏠</div>
              <h3>Home-Focused</h3>
              <p>We understand residential electrical needs and design systems that work for your family's lifestyle.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔮</div>
              <h3>Future-Ready</h3>
              <p>Our installations are designed to accommodate future technology and electrical needs.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>All work meets or exceeds electrical codes to ensure your family's safety.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Energy Efficient</h3>
              <p>We install energy-efficient systems that save you money on utility bills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Dream Home?</h2>
            <p>Contact us today for a detailed consultation and project estimate</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Home Quote</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResidentialConstruction
