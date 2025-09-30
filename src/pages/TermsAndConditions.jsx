import './TermsAndConditions.css'

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Terms & Conditions</h1>
            <p>Please read these terms and conditions carefully</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section">
        <div className="container">
          <div className="terms-content">
            <div className="terms-section">
              <h2>1. Service Agreement</h2>
              <p>By engaging Perry Electrical for electrical services, you agree to these terms and conditions. All work is performed according to local building codes and electrical standards.</p>
            </div>

            <div className="terms-section">
              <h2>2. Estimates and Pricing</h2>
              <p>All estimates are valid for 30 days from the date of issue. Final pricing may vary based on actual work required and any changes to the original scope of work. We will notify you of any significant changes before proceeding.</p>
            </div>

            <div className="terms-section">
              <h2>3. Payment Terms</h2>
              <p>Payment is due upon completion of work unless other arrangements have been made in advance. We accept cash, check, and major credit cards. A 1.5% service charge applies to credit card payments.</p>
            </div>

            <div className="terms-section">
              <h2>4. Warranty</h2>
              <p>We provide a 1-year warranty on all workmanship and materials. This warranty covers defects in workmanship and materials but does not cover damage caused by misuse, abuse, or normal wear and tear.</p>
            </div>

            <div className="terms-section">
              <h2>5. Safety and Permits</h2>
              <p>All work is performed in accordance with local building codes and safety regulations. We will obtain all necessary permits for the work performed. You are responsible for any permit fees unless otherwise specified.</p>
            </div>

            <div className="terms-section">
              <h2>6. Liability</h2>
              <p>Perry Electrical is fully licensed and insured. Our liability is limited to the cost of the work performed. We are not responsible for any pre-existing electrical issues or damage not caused by our work.</p>
            </div>

            <div className="terms-section">
              <h2>7. Emergency Service</h2>
              <p>Emergency service calls are subject to higher rates and may include after-hours charges. Emergency service is provided on a best-effort basis and response times may vary based on location and current workload.</p>
            </div>

            <div className="terms-section">
              <h2>8. Cancellation Policy</h2>
              <p>If you need to cancel or reschedule an appointment, please provide at least 24 hours notice. Cancellations with less than 24 hours notice may be subject to a cancellation fee.</p>
            </div>

            <div className="terms-section">
              <h2>9. Materials and Equipment</h2>
              <p>All materials and equipment used in our work are of professional quality and meet or exceed industry standards. We use only licensed and approved electrical components.</p>
            </div>

            <div className="terms-section">
              <h2>10. Dispute Resolution</h2>
              <p>Any disputes arising from our services will be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be resolved through binding arbitration in accordance with Kansas state law.</p>
            </div>

            <div className="terms-section">
              <h2>11. Changes to Terms</h2>
              <p>We reserve the right to modify these terms and conditions at any time. Changes will be posted on our website and will apply to all future work performed.</p>
            </div>

            <div className="terms-section">
              <h2>12. Contact Information</h2>
              <p>If you have any questions about these terms and conditions, please contact us at:</p>
              <div className="contact-info">
                <p><strong>Perry Electrical</strong></p>
                <p>Phone: (785) 555-0123</p>
                <p>Email: info@perryelectrical.com</p>
                <p>Address: Topeka, Kansas</p>
              </div>
            </div>

            <div className="terms-footer">
              <p><strong>Last Updated:</strong> December 2024</p>
              <p>By using our services, you acknowledge that you have read and agree to these terms and conditions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsAndConditions
