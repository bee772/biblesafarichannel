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


function App() {

  return (
    <Router>
      <div className="App">
        <br />
        {/* Navbar added here */}
        <Navbar />
        
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/studies" Component={BibleStudies}></Route>
          <Route path="/safari" Component={SafariSeries}></Route>
          <Route path="/videos" Component={VideoTeachings}></Route>
          <Route path="/devotions" Component={DailyDevotions}></Route>
          <Route path="/about" Component={AboutUs}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;