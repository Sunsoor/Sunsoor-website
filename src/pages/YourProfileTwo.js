import React, { useState, useEffect } from 'react';
import YourProfileTwoData from '../testing data/YourProfileTwoData';
import { HiOutlineUserGroup } from "react-icons/hi2";
import './YourProfileTwo.css';
import Lecture from '../components/Lecture';

const YourProfileTwo = () => {
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call with the dummy data
        setTimeout(() => {
            setCourseData(YourProfileTwoData);
            setLoading(false);
        }, 1000); // Simulate a delay
    }, []);

    const editHandler = () => {
        console.log('Edit button clicked');
        // Implement your edit logic here
      };
    
      const uploadLectureHandler = () => {
        console.log('Upload Course button clicked');
        // Implement your upload course logic here
      };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="profile-container">
            <img src={courseData.thumbnail} alt="Course Thumbnail" />
            <h2 className="profile-title">{courseData.title}</h2>
            <div className="profile-views">
                <HiOutlineUserGroup /> {courseData.views}
            </div>
            <div>
                <p className="profile-creator">Created by <a href="/profile/madhav">{courseData.creator}</a></p>
                <p className="profile-language">Language <span>{courseData.language}</span></p>
            </div>

            <div className="profile-description">
                <h3>Business management course</h3>
                <p>{courseData.description}</p>
            </div>
            <div className="profile-lectures">
                <h3>Lectures</h3>
                {courseData.lectures.map((lecture, index) => (
                    <Lecture
                        key={index}
                        title={lecture.title}
                        path={`/lecture/${index}`} // Adjust path as needed
                    />
                ))}
            </div>
            <div className="profile-buttons">
        <button onClick={editHandler} className="edit-button">Edit Course</button>
        <button onClick={uploadLectureHandler} className="upload-button">Upload Lectures</button>
      </div>
        </div>
    );
};

export default YourProfileTwo;
