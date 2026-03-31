// Home.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Carousel from './Carousel';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* TOP CAROUSEL */}
      <Carousel />

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge">Faith • Life • Purpose</span>
          <h1>Grow in Faith. Live with Purpose.</h1>
          <p>
            Discover practical Bible teachings that transform your mindset, strengthen your walk with God,
            and help you live intentionally every day.
          </p>
          <div className="hero-actions">
            <button className="cta-btn primary" onClick={() => navigate('/studies')}>
              Start Your Journey
            </button>
            <button className="cta-btn ghost" onClick={() => navigate('/videos')}>
              Watch Teachings
            </button>
          </div>

          {/* QUICK STATS */}
          <div className="stats">
            <div>
              <h3>100+</h3>
              <p>Teachings</p>
            </div>
            <div>
              <h3>Daily</h3>
              <p>Devotions</p>
            </div>
            <div>
              <h3>Global</h3>
              <p>Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro container">
        <h2>Welcome to the Bible Safari Channel</h2>
        <p>
          A place where faith meets everyday life. Grow spiritually, find clarity, and walk boldly in purpose.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="features container">
        <div className="feature-card">
          <h3>Deep Teachings</h3>
          <p>Understand scripture in a simple and powerful way.</p>
        </div>
        <div className="feature-card">
          <h3>Practical Life</h3>
          <p>Apply biblical wisdom in real life situations.</p>
        </div>
        <div className="feature-card">
          <h3>Daily Growth</h3>
          <p>Stay consistent with devotion and inspiration.</p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="section container">
        <div className="text">
          <h2>Bible Teachings</h2>
          <p>
            Dive deep into the Word of God with teachings that bring clarity, wisdom, and spiritual growth.
          </p>
        </div>
        <div className="image">
          <img src="/images/Believe.jpg" alt="Bible teaching" />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section reverse container">
        <div className="text">
          <h2>Life Transformation</h2>
          <p>
            Experience renewal through faith. Let biblical truth reshape your mindset and purpose.
          </p>
        </div>
        <div className="image">
          <img src="/images/Pray.jpg" alt="Life transformation" />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="section container">
        <div className="text">
          <h2>Daily Inspiration</h2>
          <p>
            Stay encouraged daily with devotionals and uplifting messages.
          </p>
        </div>
        <div className="image">
          <img src="/images/You.jpg" alt="Inspiration" />
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="section reverse container">
        <div className="text">
          <h2>Faith in Action</h2>
          <p>
            Put your faith into action and impact your world with purpose and confidence.
          </p>
        </div>
        <div className="image">
          <img src="/images/daily.jpeg" alt="Faith in action" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What People Are Saying</h2>
        <div className="testimonial-cards container">
          <div className="card">
            <p>“This platform changed how I understand the Bible.”</p>
            <span>- A Believer</span>
          </div>
          <div className="card">
            <p>“I feel encouraged every time I visit.”</p>
            <span>- Faith Seeker</span>
          </div>
          <div className="card">
            <p>“Practical and life-changing teachings.”</p>
            <span>- Community Member</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Grow Spiritually?</h2>
          <p>Start learning and walking in purpose today.</p>
          <button className="cta-btn primary" onClick={() => navigate('/studies')}>
            Explore Teachings
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-links container">
          <Link to="/">Home</Link>
          <Link to="/studies">Studies</Link>
          <Link to="/safari">Safari</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/devotions">Devotions</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} The Bible Safari Channel</p>
      </footer>
    </div>
  );
};

export default Home;

