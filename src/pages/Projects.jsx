import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Projects</h1>
            <p>Showcasing our electrical construction and service work across Northeast Kansas</p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Recent electrical construction and service projects</p>
          </div>
          
          <div className="project-categories">
            <div className="category-tabs">
              <button className="tab active">All Projects</button>
              <button className="tab">Commercial</button>
              <button className="tab">Residential</button>
              <button className="tab">Service Work</button>
            </div>
          </div>

          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-image">
                <div className="image-placeholder">🏢</div>
                <div className="project-badge">Featured</div>
              </div>
              <div className="project-content">
                <div className="project-category">Commercial</div>
                <h3>Office Building Complex</h3>
                <p>Complete electrical system for 50,000 sq ft office building including power distribution, lighting, and data infrastructure.</p>
                <div className="project-details">
                  <span className="detail">📍 Topeka, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">⚡ 400A Service</span>
                </div>
                <div className="project-features">
                  <span className="feature">Power Distribution</span>
                  <span className="feature">LED Lighting</span>
                  <span className="feature">Data Infrastructure</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏠</div>
              </div>
              <div className="project-content">
                <div className="project-category">Residential</div>
                <h3>Custom Smart Home</h3>
                <p>Complete electrical system for 3,500 sq ft custom home with smart home automation and EV charging.</p>
                <div className="project-details">
                  <span className="detail">📍 Topeka, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">⚡ 200A Service</span>
                </div>
                <div className="project-features">
                  <span className="feature">Smart Home</span>
                  <span className="feature">EV Charging</span>
                  <span className="feature">LED Lighting</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏪</div>
              </div>
              <div className="project-content">
                <div className="project-category">Commercial</div>
                <h3>Retail Shopping Center</h3>
                <p>Electrical installation for multi-tenant retail space with individual metering and modern lighting systems.</p>
                <div className="project-details">
                  <span className="detail">📍 Lawrence, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">⚡ 200A Service</span>
                </div>
                <div className="project-features">
                  <span className="feature">Multi-Tenant</span>
                  <span className="feature">Individual Metering</span>
                  <span className="feature">Modern Lighting</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏭</div>
              </div>
              <div className="project-content">
                <div className="project-category">Commercial</div>
                <h3>Manufacturing Facility</h3>
                <p>High-capacity electrical system for industrial facility with specialized equipment and safety systems.</p>
                <div className="project-details">
                  <span className="detail">📍 Manhattan, KS</span>
                  <span className="detail">📅 2023</span>
                  <span className="detail">⚡ 800A Service</span>
                </div>
                <div className="project-features">
                  <span className="feature">High-Capacity</span>
                  <span className="feature">Industrial Equipment</span>
                  <span className="feature">Safety Systems</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏡</div>
              </div>
              <div className="project-content">
                <div className="project-category">Residential</div>
                <h3>Kitchen Renovation</h3>
                <p>Complete kitchen electrical upgrade with modern outlets, lighting, and smart home integration.</p>
                <div className="project-details">
                  <span className="detail">📍 Lawrence, KS</span>
                  <span className="detail">📅 2024</span>
                  <span className="detail">💡 LED Lighting</span>
                </div>
                <div className="project-features">
                  <span className="feature">Kitchen Upgrade</span>
                  <span className="feature">Smart Integration</span>
                  <span className="feature">Modern Outlets</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">🏘️</div>
              </div>
              <div className="project-content">
                <div className="project-category">Residential</div>
                <h3>Subdivision Development</h3>
                <p>Electrical installation for 25 new homes in residential subdivision with modern electrical standards.</p>
                <div className="project-details">
                  <span className="detail">📍 Manhattan, KS</span>
                  <span className="detail">📅 2023</span>
                  <span className="detail">🏗️ 25 Homes</span>
                </div>
                <div className="project-features">
                  <span className="feature">New Construction</span>
                  <span className="feature">Subdivision</span>
                  <span className="feature">Modern Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Project Statistics</h2>
            <p>Our track record of successful electrical projects</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">On-Time Delivery</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our clients say about our work</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Perry Electrical exceeded our expectations on our office building project. Professional, on-time, and within budget. Highly recommended!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Property Manager, Topeka</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"They handled our entire home renovation electrical work. Great communication throughout the project and everything was completed perfectly."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Mike Chen</h4>
                  <span>Homeowner, Lawrence</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Outstanding work on our manufacturing facility. The electrical system has been running flawlessly for over a year now."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Jennifer Davis</h4>
                  <span>Facility Manager, Manhattan</span>
                </div>
                <div className="rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let us bring the same quality and professionalism to your electrical project</p>
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

export default Projects
