import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Bible Studies', path: '/studies', icon: '📖' },
    { name: 'Safari Series', path: '/safari', icon: '🦁' },
    { name: 'Video Teachings', path: '/videos', icon: '🎥' },
    { name: 'Daily Devotions', path: '/devotions', icon: '🙏' },
    { name: 'About Us', path: '/about', icon: '👥' },
    { name: 'Contact', path: '/contact', icon: '✉️' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open (only on mobile where overlay exists)
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="navbar-logo-link">
            <img 
              src="/images/Logo.png" 
              alt="Bible Safari Channel" 
              className="navbar-logo"
              loading="eager"
            />
          </Link>
          
          {/* Mobile Menu Button - only visible on tablet/mobile */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </button>

          {/* Navigation Links - with horizontal scroll on desktop/tablet when needed */}
          <div className={`nav-links-wrapper ${isMenuOpen ? 'mobile-open' : ''}`}>
            <div className="nav-links">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  style={{ '--i': index }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-icon" role="img" aria-label={item.name}>
                    {item.icon}
                  </span>
                  <span className="nav-text">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search and Action Buttons */}
          <div className="nav-actions">
            <form className="search-container" onSubmit={handleSearch}>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search scriptures..."
                aria-label="Search scriptures"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn" aria-label="Search">
                <span role="img" aria-hidden="true">🔍</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="nav-overlay active" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;