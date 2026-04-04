import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Initialize EmailJS with your public key
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("P0E8fk-aeyil103Uc");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const templateParams = {
      to_email: "biblesafarichannel@gmail.com",
      from_name: fullName,
      from_email: email,
      subject: subject || "New Contact Form Message",
      message: message,
      reply_to: email,
    };

    try {
      // Replace with your actual EmailJS credentials
      const response = await emailjs.send(
        "service_sbxxykq", // Get from EmailJS Dashboard
        "template_5bsldou", // Get from EmailJS Dashboard
        templateParams
      );
      
      console.log("SUCCESS!", response.status, response.text);
      setLoading(false);
      setSuccess("✅ Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(""), 5000);
    } catch (error) {
      console.log("FAILED...", error);
      setLoading(false);
      setError("❌ Failed to send message. Please try again.");
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(""), 5000);
    }
  };

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

            <div className="info-details">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <strong>Email:</strong>
                  <p>biblesafarichannel@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Phone:</strong>
                  <p>+254 726 174 637</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Location:</strong>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>

            {loading && (
              <div className="contact-message loading">
                <span className="spinner"></span>
                Sending message...
              </div>
            )}
            {success && <div className="contact-message success">{success}</div>}
            {error && <div className="contact-message error">{error}</div>}

            <div className="form-group">
              <input 
                type="text" 
                placeholder="Full Name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject (Optional)" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <textarea 
                placeholder="Write your message..." 
                rows="6" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={loading}
              ></textarea>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
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