// App.js
import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import TermsAndConditions from './pages/Terms&Conditons';
import PrivacyPage from './pages/PrivacyPage';
import Footer from './components/Footer';
import DownloadNow from './pages/DownloadNow'

const App = () => {
  return (
    <div className="App">
      
      

      <Navbar  />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/download-now" element={<DownloadNow />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
