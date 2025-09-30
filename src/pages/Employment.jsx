import { Link } from 'react-router-dom'
import './Employment.css'

const Employment = () => {
  return (
    <div className="employment">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>Build your career with Perry Electrical - a growing electrical contracting company serving Northeast Kansas</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-large">Apply Now</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Perry Electrical?</h2>
            <p>We offer competitive benefits and a supportive work environment</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Pay</h3>
              <p>Industry-leading wages with performance bonuses and overtime opportunities</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏥</div>
              <h3>Health Benefits</h3>
              <p>Comprehensive health, dental, and vision insurance for you and your family</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Training & Development</h3>
              <p>Ongoing training opportunities and professional development programs</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3>Work-Life Balance</h3>
              <p>Flexible scheduling and paid time off to spend with your family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>Current job openings at Perry Electrical</p>
          </div>
          <div className="positions-grid">
            <div className="position-card">
              <div className="position-header">
                <h3>Licensed Electrician</h3>
                <span className="position-type">Full-time</span>
              </div>
              <div className="position-details">
                <p>We're seeking a licensed electrician with 3+ years of experience for residential and commercial projects.</p>
                <ul className="position-requirements">
                  <li>Valid Kansas electrical license</li>
                  <li>3+ years experience</li>
                  <li>Reliable transportation</li>
                  <li>Strong work ethic</li>
                </ul>
                <div className="position-cta">
                  <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                </div>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>Electrical Apprentice</h3>
                <span className="position-type">Full-time</span>
              </div>
              <div className="position-details">
                <p>Entry-level position for someone looking to start their electrical career. We provide training and mentorship.</p>
                <ul className="position-requirements">
                  <li>High school diploma or GED</li>
                  <li>Willingness to learn</li>
                  <li>Physical ability to work</li>
                  <li>Valid driver's license</li>
                </ul>
                <div className="position-cta">
                  <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                </div>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>Project Manager</h3>
                <span className="position-type">Full-time</span>
              </div>
              <div className="position-details">
                <p>Manage electrical construction projects from start to finish. Coordinate with clients, suppliers, and team members.</p>
                <ul className="position-requirements">
                  <li>Project management experience</li>
                  <li>Electrical knowledge preferred</li>
                  <li>Strong communication skills</li>
                  <li>Computer proficiency</li>
                </ul>
                <div className="position-cta">
                  <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Company Culture</h2>
              <p>At Perry Electrical, we believe in creating a positive work environment where our team members can grow and succeed. We value safety, quality workmanship, and customer satisfaction.</p>
              <div className="culture-features">
                <div className="culture-feature">
                  <div className="feature-icon">🤝</div>
                  <div className="feature-content">
                    <h4>Team Collaboration</h4>
                    <p>We work together to deliver exceptional results for our clients</p>
                  </div>
                </div>
                <div className="culture-feature">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-content">
                    <h4>Safety First</h4>
                    <p>Safety is our top priority in everything we do</p>
                  </div>
                </div>
                <div className="culture-feature">
                  <div className="feature-icon">📈</div>
                  <div className="feature-content">
                    <h4>Growth Opportunities</h4>
                    <p>We invest in our team members' professional development</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <div className="image-placeholder">👷‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Team?</h2>
            <p>Apply today and start your career with Perry Electrical</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Apply Now</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Employment
