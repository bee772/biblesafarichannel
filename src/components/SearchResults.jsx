import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';
  const normalizedQuery = query.trim().toLowerCase();

  const navItems = [
    { name: 'Home', path: '/', description: 'Start your journey with Bible Safari Channel' },
    { name: 'Bible Studies', path: '/studies', description: 'Deep teachings and study guides' },
    { name: 'Safari Series', path: '/safari', description: 'Thematic scripture series' },
    { name: 'Video Teachings', path: '/videos', description: 'Video messages and sermons' },
    { name: 'Daily Devotions', path: '/devotions', description: 'Short daily devotional content' },
    { name: 'About Us', path: '/about', description: 'Learn about our mission and values' },
    { name: 'Contact', path: '/contact', description: 'Reach out to the team' },
  ];

  const matchedItems = normalizedQuery
    ? navItems.filter(item =>
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  return (
    <section className="search-results-page">
      <div className="search-results-container">
        <h1>Search Results</h1>
        {!query ? (
          <p>Please enter a search query in the navbar search box.</p>
        ) : (
          <>
            <p>
              You searched for: <strong>{query}</strong>
            </p>
            {matchedItems.length > 0 ? (
              <div className="search-results-list">
                <h2>Pages matching your search</h2>
                <ul>
                  {matchedItems.map(item => (
                    <li key={item.path}>
                      <Link to={item.path}>{item.name}</Link>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>
                No direct page matches were found. Try searching for keywords like
                <em> Bible</em>, <em>Devotions</em>, or <em>Sermon</em>.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
