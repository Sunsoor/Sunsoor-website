// src/components/JobOpeningCard.js
import React from 'react';
import './JobOpeningCard.css';

const JobOpeningCard = ({ jobTitle, location, salaryRange, companyLogo, postedDate }) => {
    return (
        <div className="job-opening-card">
            <img src={companyLogo} alt="Company Logo" className="Job-opening-logo" />
            <div className="job-opening-details">
                <h3 className="job-title">{jobTitle}</h3>
                <p className="location">{location}</p>
                <div className="salary-and-date">
                    <span className="posted-date">Posted on {postedDate}</span>
                </div>
            </div>
            <span className="salary-range">{salaryRange}</span>
        </div>
    );
};

export default JobOpeningCard;
