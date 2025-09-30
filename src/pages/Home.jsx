import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Split Section */}
      <section className="hero-split">
        <div className="hero-panels">
          <div className="hero-panel service-panel">
            <div className="panel-background">
              <div className="background-overlay"></div>
            </div>
            <div className="panel-content">
              <h1>FOR SERVICE</h1>
              <p>Fast, reliable electrical repairs and installations for your home or business.</p>
              <Link to="/service" className="panel-cta">Get Service Now</Link>
            </div>
          </div>
          
          <div className="hero-panel construction-panel">
            <div className="panel-background">
              <div className="background-overlay"></div>
            </div>
            <div className="panel-content">
              <h1>FOR CONSTRUCTION</h1>
              <p>Professional electrical contracting for commercial and residential construction projects.</p>
              <Link to="/commercial-construction" className="panel-cta">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="icon">⭐</span>
              <span>4.9/5 Google Rating</span>
            </div>
            <div className="trust-badge">
              <span className="icon">🏆</span>
              <span>15 Years Serving Kansas</span>
            </div>
            <div className="trust-badge">
              <span className="icon">🔒</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="trust-badge">
              <span className="icon">⚡</span>
              <span>24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Common Electrical Services</h2>
            <p>Fast, reliable solutions for your electrical needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Panel Upgrades</h3>
              <p>Modernize your electrical panel for increased capacity and safety</p>
              <Link to="/service" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">💡</div>
              <h3>Lighting Installation</h3>
              <p>Professional lighting solutions for indoor and outdoor spaces</p>
              <Link to="/service" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>EV Charger Installation</h3>
              <p>Level 2 charging stations for electric vehicles</p>
              <Link to="/service" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Electrical Repairs</h3>
              <p>Quick fixes for outlets, switches, and electrical issues</p>
              <Link to="/service" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Construction Services</h2>
            <p>Professional electrical contracting for new construction and renovations</p>
          </div>
          <div className="construction-content">
            <div className="construction-process">
              <h3>Our Process</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Consultation</h4>
                    <p>We assess your needs and create a detailed plan</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Design</h4>
                    <p>Custom electrical design tailored to your project</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Installation</h4>
                    <p>Professional installation with quality materials</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Inspection</h4>
                    <p>Thorough testing and code compliance verification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-projects">
              <h3>Featured Projects</h3>
              <div className="project-cards">
                <div className="project-card">
                  <div className="project-image">🏢</div>
                  <h4>Office Building</h4>
                  <p>Complete electrical system for 50,000 sq ft commercial space</p>
                </div>
                <div className="project-card">
                  <div className="project-image">🏠</div>
                  <h4>Custom Home</h4>
                  <p>Smart home electrical system with EV charging</p>
                </div>
              </div>
              <Link to="/projects" className="btn btn-primary">View All Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="section">
        <div className="container">
          <div className="residential-content">
            <div className="residential-text">
              <h2>Residential Electrical Services</h2>
              <p>From simple repairs to complete home electrical systems, we provide reliable service for homeowners throughout Northeast Kansas.</p>
              <ul className="residential-features">
                <li>✅ Home electrical inspections</li>
                <li>✅ Smart home automation</li>
                <li>✅ Generator installations</li>
                <li>✅ Outdoor lighting systems</li>
                <li>✅ EV charger installations</li>
              </ul>
              <Link to="/residential-construction" className="btn btn-primary btn-large">Talk to Us</Link>
            </div>
            <div className="residential-image">
              <div className="image-placeholder">🏠</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Don't just take our word for it</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Perry Electrical did an excellent job upgrading our electrical panel. Professional, on-time, and reasonably priced. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Homeowner, Topeka</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"They handled our entire office building electrical installation. Great communication throughout the project and everything was completed on schedule."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Mike Chen</h4>
                  <span>Business Owner, Lawrence</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Emergency service at 2 AM when our power went out. They were there within an hour and had us back up and running. Amazing service!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Jennifer Davis</h4>
                  <span>Restaurant Owner, Manhattan</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Whether you need service or construction, we're here to help with all your electrical needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Request Service Now</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Construction Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
