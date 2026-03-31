import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            We are here for you — whether you need prayer, guidance, or simply want
            to connect.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-grid">

          {/* INFO */}
          <div className="contact-info">
            <h2>Contact Information</h2>

            <p><strong>Email:</strong> info@biblesafarichannel.com</p>
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>

            <div className="contact-extra">
              <h3>Why Reach Out?</h3>
              <ul>
                <li>🙏 Prayer requests</li>
                <li>🤝 Collaboration opportunities</li>
                <li>📖 Spiritual guidance</li>
                <li>💬 General inquiries</li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form">
            <h2>Send a Message</h2>

            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Write your message..." rows="6" required></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>

        {/* CTA */}
        <div className="contact-cta">
          <h2>You Are Not Alone</h2>
          <p>
            No matter what you are going through, we believe God is with you.
            Reach out today and let us stand with you in faith.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;