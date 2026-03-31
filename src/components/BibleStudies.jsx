import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bible.css';

const BibleStudies = () => {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudy, setSelectedStudy] = useState(null);

  const API_BASE_URL = "https://Mwangi10.pythonanywhere.com";

  useEffect(() => {
    fetchBibleStudies();
  }, []);

  const fetchBibleStudies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/get_content?type=Bible Studies`);
      setStudies(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Bible studies:', error);
      setLoading(false);
    }
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Bible Studies...</p>
      </div>
    );
  }

  return (
    <div className="bible-studies-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bible Studies</h1>
          <p>Deepen your understanding of God's Word through our comprehensive Bible study series</p>
        </div>
      </div>

      <div className="studies-grid">
        {studies.map((study) => (
          <div key={study.id} className="study-card" onClick={() => setSelectedStudy(study)}>
            <div className="card-image">
              <img src={study.content_photo || '/default-bible.jpg'} alt={study.title} />
              <div className="card-overlay">
                <span className="study-duration">{study.duration || '45 mins'}</span>
              </div>
            </div>
            <div className="card-content">
              <h3>{study.title}</h3>
              <p className="scripture">{study.scripture_reference}</p>
              <p className="speaker">👤 {study.speaker || 'Bible Teacher'}</p>
              <p className="description">{study.description?.substring(0, 120)}...</p>
              <button className="read-more-btn">Study Now →</button>
            </div>
          </div>
        ))}
      </div>

      {selectedStudy && (
        <div className="modal-overlay" onClick={() => setSelectedStudy(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedStudy(null)}>×</button>
            <div className="modal-image">
              <img src={selectedStudy.content_photo || '/default-bible.jpg'} alt={selectedStudy.title} />
            </div>
            <div className="modal-body">
              <h2>{selectedStudy.title}</h2>
              <div className="study-meta">
                <span>📖 {selectedStudy.scripture_reference}</span>
                <span>👤 {selectedStudy.speaker || 'Bible Teacher'}</span>
                <span>⏱️ {selectedStudy.duration || '45 mins'}</span>
              </div>
              <p className="full-description">{selectedStudy.description}</p>
              {selectedStudy.youtube_link && (
                <div className="video-container">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedStudy.youtube_link)}
                    title={selectedStudy.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <button className="download-btn">Download Study Material</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BibleStudies;