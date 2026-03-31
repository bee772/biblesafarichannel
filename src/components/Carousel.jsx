import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const navigate = useNavigate();

  // Create slides using public/images assets with messages and navigation paths
  const slides = [
    { 
      id: 1, 
      src: "/images/Study.jpeg", 
      alt: "Bible Studies",
      title: "Deep Dive into Scripture",
      message: "Explore verse-by-verse Bible studies with Christian context",
      buttonText: "Start Studying",
      path: "/studies",
      
    },
    { 
      id: 2, 
      src: "/images/Safari.jpeg", 
      alt: "Safari Series",
      title: "Biblical Encounters",
      message: "Discover God by journeying through the Bible",
      buttonText: "Join Safari",
      path: "/safari",
     
    },
    { 
      id: 3, 
      src: "/images/video.jpeg", 
      alt: "Video Teachings",
      title: "Visual Bible Lessons",
      message: "Watch engaging video teachings from credible sources",
      buttonText: "Watch Now",
      path: "/videos",
     
    },
    { 
      id: 4, 
      src: "/images/daily.jpeg", 
      alt: "Daily Devotions",
      title: "Daily Bread",
      message: "Start your day with deeply-inspired devotions",
      buttonText: "Read Today",
      path: "/devotions",
    
    },
    { 
      id: 5, 
      src: "/images/about.jpg", 
      alt: "About Us",
      title: "Our Story",
      message: "Learn about our mission to share the Gospel through God's eyes",
      buttonText: "Discover More",
      path: "/about",
      
    },
    { 
      id: 6, 
      src: "/images/contact.jpeg", 
      alt: "Contact",
      title: "Connect With Us",
      message: "Have questions? We'd love to hear from you",
      buttonText: "Get in Touch",
      path: "/contact",
      
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Handle navigation to the specific page
  const handleNavigate = (path) => {
    navigate(path);
    setIsAutoPlaying(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      // Swipe right
      prevSlide();
    }
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Carousel */}
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <div className="slide-content">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="slide-image"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                {/* Enhanced overlay with message and navigation */}
                <div className="slide-overlay">
                  <div className="slide-icon">{slide.icon}</div>
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-message">{slide.message}</p>
                  
                  <button 
                    className="slide-button"
                    onClick={() => handleNavigate(slide.path)}
                    aria-label={`Navigate to ${slide.alt}`}
                  >
                    <span className="button-text">{slide.buttonText}</span>
                    <span className="button-arrow">→</span>
                  </button>
                </div>

                {/* Quick navigation badge */}
                <div className="slide-badge">
                  <span className="badge-text">{slide.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="carousel-progress">
          <div 
            className="carousel-progress-bar"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Thumbnail Navigation with Labels */}
      <div className="carousel-thumbnails">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${slide.alt}`}
          >
            <div className="thumbnail-content">
              <span className="thumbnail-icon">{slide.icon}</span>
              <span className="thumbnail-label">{slide.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;