import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './TeachersProfile.css'; // Make sure to import the CSS file
import { CustomFileUploader, CustomInputField, CustomTextarea, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

const TeachersProfile = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        teacherName: '',
        teacherDomain: '',
        teacherExperience: '',
        teacherDescription: '',
        teacherProfile: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSubmit = new FormData();
        formDataToSubmit.append('teacherName', formData.teacherName);
        formDataToSubmit.append('teacherDomain', formData.teacherDomain);
        formDataToSubmit.append('teacherExperience', formData.teacherExperience);
        formDataToSubmit.append('teacherDescription', formData.teacherDescription);
        if (formData.teacherProfile) {
            formDataToSubmit.append('teacherProfile', formData.teacherProfile);
        }

        console.log('Form Data:', formDataToSubmit);

        try {
            const response = await axios.post('/your-backend-endpoint', formDataToSubmit, {
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
        <div className='teacher-details-main'>
            <form onSubmit={handleSubmit} className='teacher-details-form'>
                <SubHeading heading="teacher details" />
                <p className='company-form-para'>Fill up your Company details</p>
                <div className='teacher-input-field'>
                    <div className='teacher-details-div'>
                        <CustomInputField
                            label="Full Name"
                            type="text"
                            name="teacherName"
                            value={formData.teacherName}
                            placeholder="Enter your teacher name here"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='teacher-details-div'>
                        <CustomInputField
                            label="Teacher Domain"
                            type="text"
                            name="teacherDomain"
                            value={formData.teacherDomain}
                            placeholder="Enter your teacher ID here"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='teacher-details-div'>
                        <CustomInputField
                            label="Teacher Experience"
                            type="text"
                            name="teacherExperience"
                            value={formData.teacherExperience}
                            placeholder="Enter your teacher address here"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='teacher-details-div'>
                        <CustomTextarea
                            label="Description"
                            name="teacherDescription"
                            value={formData.teacherDescription}
                            placeholder="Write a short teacherDescription about your teacher"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='teacher-details-div'>
                        <CustomFileUploader
                            label="Profile picture"
                            name="teacherProfile"
                            accept=".jpg,.png"
                            placeholder="Upload your teacher logo or profile"
                            onChange={handleFileChange}
                        />
                    </div>
                   
                    
                </div>
                <SubmitButton content="Save and continue" />
            </form>
        </div>
    );
};

export default TeachersProfile;
