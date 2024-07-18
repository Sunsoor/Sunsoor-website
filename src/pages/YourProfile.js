// src/components/CompanyProfile.js
import React, { useState, useEffect } from 'react';
import YourProfileData from '../testing data/YourProfileData'
import './YourProfile.css'
import JobOpeningCard from '../components/JobOpeningCard';
import CourseCard from '../components/CourseCard';

const YourProfile = () => {
  const [yourProfile, setYourProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching data from the backend
    setYourProfile(YourProfileData);
  }, []);

  if (!yourProfile) {
    return <div>Loading...</div>;
  }

  const editHandler = () => {
    console.log('Edit button clicked');
    // Implement your edit logic here
  };

  const uploadCourseHandler = () => {
    console.log('Upload Course button clicked');
    // Implement your upload course logic here
  };


  return (
    <div className="your-profile">
      <div className="profile-heading">
        <h1 className='profile-main-heading' >Your Profile</h1>
        <p>your details and courses</p>
      </div>

      <img src={yourProfile.Img} alt="ProfilePic" className="your-profile-img" />
      <h2>{yourProfile.Name}</h2>
      <div className="your-profile-section">
        <h3>Description</h3>
        <p>{yourProfile.Description}</p>
      </div>
      <div className="teaching-details">
        <div>
          <h4>Teaching domain</h4>
          <p>{yourProfile.Domain}</p>
        </div>
        <div>
          <h4>Experience</h4>
          <p>{yourProfile.Experience}</p>
        </div>
      </div>

      <div className='courses-container'>
        <h4>Courses<span>(0)</span></h4>
        <div className='courses'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        </div>
        
      </div>
      <div className="profile-buttons">
        <button onClick={editHandler} className="edit-button">Edit</button>
        <button onClick={uploadCourseHandler} className="upload-button">Upload Course</button>
      </div>
    </div>
  );
};

export default YourProfile;
