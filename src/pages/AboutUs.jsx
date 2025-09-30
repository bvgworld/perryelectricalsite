import { Link } from 'react-router-dom'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Perry Electrical</h1>
            <p>Serving Northeast Kansas with professional electrical services for over 15 years</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2009, Perry Electrical has been providing reliable electrical services to homes and businesses throughout Northeast Kansas. What started as a small family business has grown into one of the region's most trusted electrical contractors.</p>
              <p>Our commitment to quality workmanship, customer satisfaction, and safety has earned us a reputation for excellence. We've completed over 500 projects ranging from simple repairs to complex commercial installations.</p>
              <p>Today, we continue to serve our community with the same dedication and professionalism that has made us a trusted name in electrical contracting.</p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">👷‍♂️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>Safety is our top priority. We follow all safety protocols and ensure every project meets the highest safety standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality Workmanship</h3>
              <p>We take pride in delivering high-quality work that stands the test of time. Every project is completed to our exacting standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer Satisfaction</h3>
              <p>Your satisfaction is our goal. We work closely with you to ensure your electrical needs are met and exceeded.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>We stay current with the latest electrical technologies and techniques to provide you with the best solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Licensed professionals dedicated to your electrical needs</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">👨‍💼</div>
              </div>
              <div className="member-info">
                <h3>John Perry</h3>
                <p className="member-title">Owner & Master Electrician</p>
                <p>15+ years experience in electrical contracting. Licensed in Kansas with expertise in residential and commercial projects.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">👨‍🔧</div>
              </div>
              <div className="member-info">
                <h3>Mike Johnson</h3>
                <p className="member-title">Senior Electrician</p>
                <p>10+ years experience specializing in commercial construction and industrial electrical systems.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">👩‍🔧</div>
              </div>
              <div className="member-info">
                <h3>Sarah Davis</h3>
                <p className="member-title">Project Manager</p>
                <p>Manages all construction projects from start to finish, ensuring timely completion and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2>Licenses & Certifications</h2>
            <p>Fully licensed and insured for your peace of mind</p>
          </div>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">📜</div>
              <h3>Kansas Electrical License</h3>
              <p>Fully licensed electrical contractor in the state of Kansas</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🛡️</div>
              <h3>Bonded & Insured</h3>
              <p>Comprehensive insurance coverage for all projects</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✅</div>
              <h3>Code Compliance</h3>
              <p>All work meets or exceeds local building codes</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🏆</div>
              <h3>BBB Accredited</h3>
              <p>Better Business Bureau accredited business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Contact Perry Electrical for all your electrical needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Quote</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Call (785) 555-0123</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
