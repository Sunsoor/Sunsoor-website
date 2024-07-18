import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CourseDetails.css'; // Make sure to import the CSS file
import { CustomDropdown, CustomInputField, CustomTextarea, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

const CourseDetails = () => {
    const navigate = useNavigate();
    const [courseDetails, setCourseDetails] = useState({
        Category: 'Business development',
        Title: '',
        Language: '',
        PricePerEpisode: '',
        Tags: '',
        Description: '',
    });

    const categories = ['Business development', 'Marketing', 'Finance', 'Technology'];

    const handleCategoryChange = (event) => {
        const { value } = event.target;
        setCourseDetails(prevCourseDetails => ({
            ...prevCourseDetails,
            Category: value,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseDetails(prevCourseDetails => ({
            ...prevCourseDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const courseDetailsToSubmit = new FormData();
        courseDetailsToSubmit.append('Category', courseDetails.Category);
        courseDetailsToSubmit.append('Title', courseDetails.Title);
        courseDetailsToSubmit.append('Language', courseDetails.Language);
        courseDetailsToSubmit.append('PricePerEpisode', courseDetails.PricePerEpisode);
        courseDetailsToSubmit.append('Tags', courseDetails.Tags);
        courseDetailsToSubmit.append('Description', courseDetails.Description);

        console.log('Form Data:', courseDetails.Tags );

        try {
            const response = await axios.post('/your-backend-endpoint', courseDetailsToSubmit, {
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
        <div className='course-details-main'>
            <form onSubmit={handleSubmit} className='course-details-form'>
                <SubHeading heading="Course details" />
                <p className='company-form-para'>Fill up the details of your course</p>
                <div className='course-input-field'>
                    <div className='course-details-div'>
                        <CustomDropdown
                            label="Category"
                            options={categories}
                            value={courseDetails.Category}
                            onChange={handleCategoryChange}
                        />
                    </div>
                    <div className='course-details-div'>
                        <CustomInputField
                            label="Title"
                            type="text"
                            name="Title"
                            value={courseDetails.Title}
                            placeholder="Enter your course Title"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='course-details-div'>
                        <CustomInputField
                            label="Language"
                            type="text"
                            name="Language"
                            value={courseDetails.Language}
                            placeholder="Language of course"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='course-details-div price-per-episode'>
                        <CustomInputField
                            label="Price per episode"
                            type="text"
                            name="PricePerEpisode"
                            value={courseDetails.PricePerEpisode}
                            placeholder="10 Rs."
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='course-details-div'>
                        <CustomInputField
                            label="Tags"
                            type="text"
                            name="Tags"
                            value={courseDetails.Tags}
                            placeholder="Enter Tags relevant to your job"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='course-details-div'>
                        <CustomTextarea
                            label="Description"
                            name="Description"
                            value={courseDetails.Description}
                            placeholder="Write a short Description about yourself"
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <SubmitButton content="Save and continue" />
            </form>
        </div>
    );
};

export default CourseDetails;
