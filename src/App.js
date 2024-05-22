// App.js
import React from 'react';
import Navbar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import './App.css';
/*import TermsAndConditions from './pages/Terms&Conditons';*/
/*import PrivacyPage from './pages/PrivacyPage';*/
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      {<Navbar />}
      {<LandingPage />}
      {/*<TermsAndConditions/>*/}
      {/*<PrivacyPage/>*/}
      <Footer/>
    </div>
  );
};

export default App;
