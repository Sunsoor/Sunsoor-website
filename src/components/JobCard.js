// src/JobCard.js
import React, { useEffect, useState } from 'react';
import './JobCard.css';
import { IoLocationOutline } from "react-icons/io5";
import { mockJobData } from '../testing data/JobCardData';

const JobCard = () => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setJobData(mockJobData);
    };

    fetchData();
  }, []);

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="job-card">
      <div className="logo-and-details">
        <img src={jobData.logo} alt={`${jobData.companyName} logo`} className="company-logo" />
        <div className="job-details">
          <div className='job-name'>
            <h2 className="job-title">{jobData.jobTitle}</h2>
            <p className="company-name">{jobData.companyName}</p>
          </div>
          <div className="location">
            <span role="img" aria-label="location"><IoLocationOutline /></span>
            {jobData.location}
          </div>
        </div>
      </div>
      <div className="job-salary-and-date">
        <p className="salary">{jobData.salary}/m</p>
        <p className="date-posted">{jobData.datePosted}</p>
      </div>
    </div>
  );
};

export default JobCard;
