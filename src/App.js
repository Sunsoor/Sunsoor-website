// App.js
import React from 'react';
import Navbar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {<Navbar />}
      <LandingPage />
    </div>
  );
};

export default App;
