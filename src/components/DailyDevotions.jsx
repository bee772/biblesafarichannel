import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Daily.css';

const DailyDevotions = () => {
  const [devotions, setDevotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDevotion, setSelectedDevotion] = useState(null);

  const API_BASE_URL = "https://Mwangi10.pythonanywhere.com";

  useEffect(() => {
    fetchDailyDevotions();
  }, []);

  const fetchDailyDevotions = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/get_content?type=Daily Devotions`);
      setDevotions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching daily devotions:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Daily Devotions...</p>
      </div>
    );
  }

  return (
    <div className="devotions-container">
      <div className="devotions-hero">
        <div className="devotions-hero-content">
          <h1>Daily Devotions</h1>
          <p>Start your day with God's word and find strength for today</p>
          <div className="today-date">{formatDate(new Date())}</div>
        </div>
      </div>

      <div className="devotions-list">
        {devotions.map((devotion) => (
          <div key={devotion.id} className="devotion-card" onClick={() => setSelectedDevotion(devotion)}>
            <div className="devotion-date">{formatDate(devotion.created_at)}</div>
            <div className="devotion-content">
              <h3>{devotion.title}</h3>
              <div className="devotion-scripture">
                <strong>📖 Scripture:</strong> {devotion.scripture_reference || 'Not specified'}
              </div>
              <p className="devotion-message">{devotion.description?.substring(0, 150)}...</p>
              <div className="devotion-author">✍️ {devotion.speaker || 'Devotional Writer'}</div>
            </div>
            {devotion.content_photo && (
              <div className="devotion-image">
                <img src={devotion.content_photo} alt={devotion.title} />
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedDevotion && (
        <div className="modal-overlay" onClick={() => setSelectedDevotion(null)}>
          <div className="devotion-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedDevotion(null)}>×</button>
            <div className="devotion-modal-header">
              <div className="devotion-modal-date">{formatDate(selectedDevotion.created_at)}</div>
              <h2>{selectedDevotion.title}</h2>
              <div className="devotion-modal-scripture">
                📖 {selectedDevotion.scripture_reference || 'Not specified'}
              </div>
            </div>
            <div className="devotion-modal-body">
              <p className="devotion-full-message">{selectedDevotion.description || 'No description available.'}</p>
              <div className="devotion-reflection">
                <h4>💭 Reflection:</h4>
                <p>Take a moment to meditate on this scripture and how it applies to your life today. Ask God to reveal His truth to you through these words.</p>
              </div>
              <div className="devotion-prayer">
                <h4>🙏 Prayer:</h4>
                <p>Lord, thank You for Your word that guides and directs my path. Help me to apply these truths to my life today. In Jesus' name, Amen.</p>
              </div>
              <div className="devotion-author-full">
                <strong>Written by:</strong> {selectedDevotion.speaker || 'Devotional Writer'}
              </div>
            </div>
            <div className="devotion-modal-footer">
              <button className="share-btn">Share Devotion</button>
              <button className="save-btn">Save for Later</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyDevotions;