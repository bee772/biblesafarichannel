import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* HERO */}
        <div className="about-hero">
          <h1>Bible Safari Channel</h1>
          <p>
            A journey through God's Word, where scripture meets life,
            purpose is discovered, and faith is strengthened.
          </p>
        </div>

        {/* INTRO */}
        <div className="about-block">
          <h2>Who We Are</h2>
          <p>
            Bible Safari Channel is more than just a platform — it is a spiritual
            journey. Just as a safari explores the depth, beauty, and mystery of
            the wild, we explore the profound truths hidden within the Word of God.
            Every teaching, message, and insight is designed to guide you into a
            deeper understanding of scripture and a more meaningful walk with God.
          </p>

          <p>
            In a world filled with noise, confusion, and uncertainty, we exist to
            bring clarity, truth, and hope through the timeless wisdom of the Bible.
            Whether you are new in faith or deeply rooted, this platform is designed
            to meet you where you are and take you further.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="about-grid">
          <div className="about-card">
            <h3>🌍 Our Mission</h3>
            <p>
              To teach, inspire, and transform lives through powerful and practical
              Bible-based teachings that connect directly to everyday life.
              We aim to make the Word of God understandable, relatable, and
              impactful.
            </p>
          </div>

          <div className="about-card">
            <h3>✨ Our Vision</h3>
            <p>
              To build a global community of believers who are spiritually grounded,
              purpose-driven, and equipped to live out their faith boldly in every
              area of life.
            </p>
          </div>

          <div className="about-card">
            <h3>🔥 Our Calling</h3>
            <p>
              To awaken hearts, renew minds, and ignite a deeper hunger for God’s
              presence through consistent teaching, prayer, and encouragement.
            </p>
          </div>
        </div>

        {/* WHAT WE OFFER */}
        <div className="about-block">
          <h2>What We Offer</h2>

          <div className="about-features">
            <div className="feature">
              <h4>📖 Deep Bible Teachings</h4>
              <p>
                We break down scripture into simple, powerful, and practical lessons
                that you can apply immediately in your daily life.
              </p>
            </div>

            <div className="feature">
              <h4>🌱 Spiritual Growth</h4>
              <p>
                Our content is designed to help you grow in faith, discipline,
                understanding, and spiritual maturity.
              </p>
            </div>

            <div className="feature">
              <h4>🛤 Life Guidance</h4>
              <p>
                We connect biblical principles to real-life situations — helping you
                navigate relationships, purpose, and challenges.
              </p>
            </div>

            <div className="feature">
              <h4>🙏 Prayer & Encouragement</h4>
              <p>
                Receive uplifting messages, prayer guidance, and encouragement to
                strengthen your walk with God daily.
              </p>
            </div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="about-block">
          <h2>Our Core Values</h2>

          <ul className="values">
            <li><strong>Truth:</strong> We stand firmly on the Word of God.</li>
            <li><strong>Faith:</strong> We believe in living by faith daily.</li>
            <li><strong>Growth:</strong> Continuous spiritual development is key.</li>
            <li><strong>Impact:</strong> Our goal is life transformation.</li>
            <li><strong>Community:</strong> We grow stronger together.</li>
          </ul>
        </div>

        {/* CALL TO ACTION */}
        <div className="about-cta">
          <h2>Start Your Journey</h2>
          <p>
            Whether you are searching for answers, direction, or a deeper connection
            with God, Bible Safari Channel is here to walk with you every step of
            the way.
          </p>
          <button>Explore Teachings</button>
        </div>

      </div>
    </section>
  );
};

export default About;