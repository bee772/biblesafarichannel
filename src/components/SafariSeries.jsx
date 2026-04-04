import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Safari.css';

const SafariSeries = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // API Base URL - Update with your PythonAnywhere username
  const API_BASE_URL = "https://Mwangi10.pythonanywhere.com";

  useEffect(() => {
    fetchSafariSeries();
  }, []);

  const fetchSafariSeries = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/get_content?type=Safari Series`);
      setSeries(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Safari series:', error);
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
        <p>Loading Safari Series...</p>
      </div>
    );
  }

  return (
    <div className="safari-container">
      <div className="safari-hero">
        <div className="safari-hero-content">
          <h1>Safari Series</h1>
          <p>Embark on a spiritual journey through the wild</p>
        </div>
      </div>

      <div className="episodes-list">
        {series.map((episode, index) => (
          <div key={episode.id} className="episode-card" onClick={() => setSelectedEpisode(episode)}>
            <div className="episode-number">Episode {episode.series_number || index + 1}</div>
            <div className="episode-info">
              <h3>{episode.title}</h3>
              <p className="episode-host">🎥 Host: {episode.speaker || 'Safari Guide'}</p>
              <p className="episode-duration">⏱️ {episode.duration || '30 mins'}</p>
              <p className="episode-description">{episode.description?.substring(0, 100)}...</p>
            </div>
            <div className="episode-thumbnail">
              <img src={episode.content_photo || '/default-safari.jpg'} alt={episode.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for episode detail */}
      {selectedEpisode && (
        <div className="modal-overlay" onClick={() => setSelectedEpisode(null)}>
          <div className="modal-content safari-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedEpisode(null)}>×</button>
            <div className="modal-header">
              <img src={selectedEpisode.content_photo || '/default-safari.jpg'} alt={selectedEpisode.title} />
              <div className="modal-header-info">
                <span className="episode-badge">Episode {selectedEpisode.series_number}</span>
                <h2>{selectedEpisode.title}</h2>
                <p>Host: {selectedEpisode.speaker || 'Safari Guide'}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="episode-details">
                <div className="detail-item">
                  <strong>Duration:</strong> {selectedEpisode.duration || '30 mins'}
                </div>
                <div className="detail-item">
                  <strong>Release Date:</strong> {new Date(selectedEpisode.created_at).toLocaleDateString()}
                </div>
              </div>
              <p className="full-description">{selectedEpisode.description}</p>
              {selectedEpisode.youtube_link && (
                <div className="video-container">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedEpisode.youtube_link)}
                    title={selectedEpisode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafariSeries;