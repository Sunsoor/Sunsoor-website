import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UploadVideoOne.css'; // Make sure to import the CSS file
import { CustomFileUploader, CustomInputField, CustomTextarea, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

const UploadVideoOne = () => {
    const navigate = useNavigate();
    const [videoDetails, setVideoDetails] = useState({
        Title: '',
        UploadVideo: null,
        Description: '',
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setVideoDetails(prevVideoDetails => ({
            ...prevVideoDetails,
            [name]: files[0],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVideoDetails(prevVideoDetails => ({
            ...prevVideoDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const videoDetailsToSubmit = new FormData();
        
        videoDetailsToSubmit.append('Title', videoDetails.Title);
        if (videoDetails.UploadVideo) {
            videoDetailsToSubmit.append('UploadVideo', videoDetails.UploadVideo);
        }
        videoDetailsToSubmit.append('Description', videoDetails.Description);

        console.log('Form Data:', videoDetailsToSubmit);

        try {
            const response = await axios.post('/your-backend-endpoint', videoDetailsToSubmit, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                navigate('/next-page'); // Replace with your next page route
            }
        } catch (error) {
            console.error('There was an error uploading the files!', error);
        }
    };

    return (
        <div className='video-details-main'>
            <form onSubmit={handleSubmit} className='video-details-form'>
                <SubHeading heading="Upload video" />
                <p className='video-form-para'>Upload your lecture videos</p>
                <div className='video-input-field'>
                    <div className='video-details-div'>
                        <CustomInputField
                            label="Title"
                            type="text"
                            name="Title"
                            value={videoDetails.Title}
                            placeholder="introduction to Business management"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='video-details-div'>
                        <CustomFileUploader
                            label="Upload video"
                            name="UploadVideo"
                            accept="video/mp4"
                            placeholder="Upload your video lecture here"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='video-details-div'>
                        <CustomTextarea
                            label="Description"
                            name="Description"
                            value={videoDetails.Description}
                            placeholder="Write a short Description about your lecture."
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <SubmitButton content="Save and continue" />
            </form>
        </div>
    );
};

export default UploadVideoOne;
