// src/JobPortal.js
import React from 'react';
import JobSearchBar from '../components/JobSearchBar';
import JobCard from '../components/JobCard';

const JobPortal = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}  >

      <JobSearchBar/>
      <JobCard/>
    </div>
  );
};

export default JobPortal;
