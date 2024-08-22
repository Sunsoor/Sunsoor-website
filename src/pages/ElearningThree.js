import React, { useState, useEffect } from 'react';
import ElearningThreeData from '../testing data/ElearningThreeData';
import VideoPlayerData from '../testing data/VideoPlayerData';
import './ElearningThree.css';
import { CustomPopup } from '../components/subcomponents/Elements';
import VideoPlayer from '../components/VideoPlayer';


const ElearningThree = () => {
    const [lectureData, setLectureData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Simulating an API call with the dummy data
        setTimeout(() => {
            setLectureData(ElearningThreeData);
            setLoading(false);
        }, 1000); // Simulate a delay
    }, []);

    const deleteHandler = () => {
        setShowPopup(true);
    };

    const handleAccept = () => {
        console.log('Lecture deleted');
        // Implement your delete logic here
        setShowPopup(false);
    };

    const handleReject = () => {
        setShowPopup(false);
    };

    const editHandler = () => {
        console.log('Upload lecture button clicked');
        // Implement your upload lecture logic here
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="profile-container">
         <VideoPlayer
        videoUrl={VideoPlayerData.videoUrl}
        thumbnail={VideoPlayerData.thumbnail}
        
      />
           {/* <img src={lectureData.thumbnail} alt="Lecture Thumbnail" />*/}
            <h2 className="profile-title">{lectureData.title}</h2>
       
            <div className="profile-description">
                <h3>Business management lecture</h3>
                <p>{lectureData.description}</p>
            </div>
           
            <div className="profile-buttons">
                <button onClick={deleteHandler} className="edit-button">Delete lecture</button>
                
                <button onClick={editHandler} className="upload-button">Upload Lectures</button>
            </div>

            {showPopup && (
                <CustomPopup
                    message="Are you sure you want to delete this lecture?"
                    acceptButtonContent="Delete"
                    rejectButtonContent="Cancel"
                    onAccept={handleAccept}
                    onReject={handleReject}
                />
            )}
        </div>
    );
};

export default ElearningThree;
