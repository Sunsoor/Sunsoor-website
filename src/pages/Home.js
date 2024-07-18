import './Home.css'
import React, { useState } from 'react';
import JobPortal from '../components/JobPortal';
import ELearning from '../components/ELearning';

const Home = () => {


  const [activeTab, setActiveTab] = useState('jobPortal');

  const renderContent = () => {
    switch (activeTab) {
      case 'jobPortal':
        return <JobPortal />;
      case 'eLearning':
        return <ELearning />;
      default:
        return <JobPortal />;
    }
  };

  return (
    <div>
      <div className="tab-navigation">
        <button
          className={activeTab === 'jobPortal' ? 'active' : ''}
          onClick={() => setActiveTab('jobPortal')}
        >
          Job Portal
        </button>
        <button
          className={activeTab === 'eLearning' ? 'active' : ''}
          onClick={() => setActiveTab('eLearning')}
        >
          E-Learning
        </button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;



