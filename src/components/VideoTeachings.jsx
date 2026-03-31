import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Video.css';

const VideoTeachings = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const API_BASE_URL = "https://Mwangi10.pythonanywhere.com";

  useEffect(() => {
    fetchVideoTeachings();
  }, []);

  const fetchVideoTeachings = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/get_content?type=Video Teachings`);
      setVideos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching video teachings:', error);
      setLoading(false);
    }
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const getYouTubeThumbnail = (url) => {
    const embedUrl = getYouTubeEmbedUrl(url);
    if (embedUrl) {
      const videoId = embedUrl.split('/embed/')[1];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return '/default-video.jpg';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Video Teachings...</p>
      </div>
    );
  }

  return (
    <div className="videos-container">
      <div className="videos-hero">
        <div className="videos-hero-content">
          <h1>Video Teachings</h1>
          <p>Powerful messages to inspire and transform your life</p>
        </div>
      </div>

      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
            <div className="video-thumbnail">
              {video.youtube_link ? (
                <img 
                  src={getYouTubeThumbnail(video.youtube_link)}
                  alt={video.title}
                  onError={(e) => {
                    e.target.src = video.content_photo || '/default-video.jpg';
                  }}
                />
              ) : (
                <img src={video.content_photo || '/default-video.jpg'} alt={video.title} />
              )}
              <div className="play-icon">▶</div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="video-speaker">👤 {video.speaker || 'Speaker'}</p>
              <p className="video-duration">⏱️ {video.duration || '30 mins'}</p>
              <p className="video-description">{video.description?.substring(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedVideo(null)}>×</button>
            <div className="video-player">
              {selectedVideo.youtube_link && (
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.youtube_link)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="video-modal-info">
              <h2>{selectedVideo.title}</h2>
              <div className="video-meta">
                <span>👤 {selectedVideo.speaker || 'Speaker'}</span>
                <span>⏱️ {selectedVideo.duration || '30 mins'}</span>
              </div>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTeachings;