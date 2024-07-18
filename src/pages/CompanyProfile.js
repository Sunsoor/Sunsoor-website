// src/components/CompanyProfile.js
import React, { useState, useEffect } from 'react';
import './CompanyProfile.css';
import dummyData from '../testing data/JobOpeningData';
import { SubHeading } from '../components/subcomponents/Elements';
import JobOpeningCard from '../components/JobOpeningCard';

const CompanyProfile = () => {
    const [companyProfile, setCompanyProfile] = useState(null);

    useEffect(() => {
        // Simulate fetching data from the backend
        setCompanyProfile(dummyData);
    }, []);

    if (!companyProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="company-profile">
            <img src={companyProfile.companyLogo} alt="Company Logo" className="company-profile-logo" />
            <SubHeading heading={companyProfile.companyName} />
            <div className="company-profile-section">
                <h3>Job description</h3>
                <p>{companyProfile.jobDescription}</p>
            </div>
            <div className="section">
                <h3>Achievements</h3>
                <p>{companyProfile.achievements}</p>
            </div>
            <div className="Industry-details">
                <div>
                    <h4>Industry</h4>
                    <p>{companyProfile.industry}</p>
                </div>
                <div>
                    <h4>Founded</h4>
                    <p>{companyProfile.founded}</p>
                </div>
            </div>

            <div className='job-openings'>
                <h4>Job openings <span>{companyProfile.jobNum}</span></h4>
                <JobOpeningCard jobTitle="Delivery boy"
                    location="Nagpur"
                    salaryRange="15k - 20k"
                    companyLogo={companyProfile.companyLogo}
                    postedDate="Posted on 12 May"
                />
            </div>

        </div>
    );
};

export default CompanyProfile;
