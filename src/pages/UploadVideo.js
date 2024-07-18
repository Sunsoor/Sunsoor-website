import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UploadVideo.css'; // Make sure to import the CSS file
import { CustomFileUploader, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

const UploadVideo = () => {
    const navigate = useNavigate();
    const [demoVideo, setDemoVideo] = useState({
        demo: null,
        thumbnail: null,
    });
   

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setDemoVideo(prevDemoVideo => ({
            ...prevDemoVideo,
            [name]: files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (demoVideo.demo) {
            formData.append('demoVideo', demoVideo.demo);
        }
        if (demoVideo.thumbnail) {
            formData.append('thumbnail', demoVideo.thumbnail);
        }

        console.log('Form Data:', formData);

        try {
            const response = await axios.post('/your-backend-endpoint', formData, {
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
                <SubHeading heading="Course details" />
                <p className='video-form-para'>Upload your demo video and thumbnail</p>
                
                <div className='video-input-field'>
                    <div className='video-details-div'>
                        <CustomFileUploader
                            label="Upload demo"
                            name="demo"
                            accept="video/mp4"
                            placeholder="Upload a short free demo video of your course"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='video-details-div'>
                        <CustomFileUploader
                            label="Upload thumbnail"
                            name="thumbnail"
                            accept="image/jpeg,image/png"
                            placeholder="Upload a thumbnail of your course"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
                <SubmitButton content="Save and continue" />
            </form>
        </div>
    );
};

export default UploadVideo;
