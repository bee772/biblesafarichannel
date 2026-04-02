import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import BibleStudies from "./components/BibleStudies";
import SafariSeries from "./components/SafariSeries";
import VideoTeachings from "./components/VideoTeachings";
import DailyDevotions from "./components/DailyDevotions";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <div className="header-content">
            <div className="logo-container">
              <div className="logo-icon">📖</div>
              <div className="channel-name">
                <span className="bible-text">BIBLE</span>
                <span className="safari-text">SAFARI</span>
                <span className="channel-text">CHANNEL</span>
              </div>
            </div>
            <div className="tagline">
              Exploring God's Word | Transforming Lives
            </div>
          </div>
        </header>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studies" element={<BibleStudies />} />
          <Route path="/safari" element={<SafariSeries />} />
          <Route path="/videos" element={<VideoTeachings />} />
          <Route path="/devotions" element={<DailyDevotions />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;