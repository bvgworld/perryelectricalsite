import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch for all your electrical needs</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Ready to start your electrical project? Contact us today for a free consultation and estimate.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p><a href="tel:7855550123">(785) 555-0123</a></p>
                    <span>24/7 Emergency Service</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p><a href="mailto:info@perryelectrical.com">info@perryelectrical.com</a></p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Service Area</h3>
                    <p>Northeast Kansas</p>
                    <span>Topeka, Lawrence, Manhattan & surrounding areas</span>
                  </div>
                </div>
              </div>

              <div className="emergency-banner">
                <h3>⚡ Electrical Emergency?</h3>
                <p>Don't wait - call us now for immediate assistance</p>
                <a href="tel:7855550123" className="btn btn-primary">Call (785) 555-0123</a>
              </div>
            </div>

            <div className="contact-form">
              <h2>Request a Quote</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="service">Electrical Service</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Construction</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your electrical needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section section-light">
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
    </div>
  )
}

export default Contact
