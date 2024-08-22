import React, { useState, useEffect } from 'react';
import YourProfileTwoData from '../testing data/YourProfileTwoData';
import { HiOutlineUserGroup } from "react-icons/hi2";
import './YourProfileTwo.css';
import Lecture from '../components/Lecture';
import VideoPlayer from '../components/VideoPlayer';
import VideoPlayerData from '../testing data/VideoPlayerData';
import { useNavigate } from 'react-router-dom';

const YourProfileTwo = () => {
    const navigate = useNavigate();
    const [role, setrole] = useState("student")

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

    const unlockLecturesHandler = () => {
        navigate("/unlock-courses");
    }
    
    if (loading) return <p>Loading...</p>;

    return (
        <div className="profile-container">
            <VideoPlayer
                videoUrl={VideoPlayerData.videoUrl}
                thumbnail={VideoPlayerData.thumbnail}

            />
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
                        path={lecture.path} // Adjust path as needed
                        role="student"
                        locked={lecture.locked}
                        price={lecture.price}

                    />
                ))}
            </div>
            <div className="profile-buttons">
                {role !== "teacher" ? (
                    <button className="upload-button" onClick={unlockLecturesHandler} >
                        Unlock Lectures
                    </button>
                ) : (
                    <div>
                        <button onClick={editHandler} className="edit-button">Edit Course</button>
                        <button onClick={uploadLectureHandler} className="upload-button">Upload Lectures</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default YourProfileTwo;
