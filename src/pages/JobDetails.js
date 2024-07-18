import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './JobDetails.css';

import { CustomInputField, CustomTextarea, SubmitButton, CustomDropdown, SubHeading,CustomRange } from '../components/subcomponents/Elements';

const JobDetails = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [experience, setExperience] = useState('1 year');
    const [gender, setGender] = useState('Female');
    const [vacancies, setVacancies] = useState('1');
    const [ageRequiredFrom, setAgeRequiredFrom] = useState('20');
    const [ageRequiredTo, setAgeRequiredTo] = useState('25');
    const [skills, setSkills] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const navigate = useNavigate();

    const generateVacanciesOptions = (max) => {
        const options = [];
        for (let i = 1; i <= max; i++) {
            options.push(i.toString());
        }
        return options;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jobData = {
            jobTitle,
            experience,
            gender,
            vacancies,
            ageRequired: {
                from: ageRequiredFrom,
                to: ageRequiredTo
            },
            skills,
            city,
            description,
            tags
        };

        console.log("Job Detailes: ",jobData);

        try {
            const response = await axios.post('/your-backend-endpoint', jobData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                navigate.push('/next-page'); // replace with your next page route
            }
        } catch (error) {
            console.error('There was an error uploading the job details!', error);
        }
    };

    return (
        <div className='job-details-main'>
            <form onSubmit={handleSubmit} className='job-details-form'>
                <SubHeading heading="Job details" />
                <p className='job-form-para'>Fill up your Job posting details</p>
                <div className='job-details-div'>
                    <CustomInputField
                        label="Job title"
                        type="text"
                        value={jobTitle}
                        placeholder="Enter your job title here"
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>
                <div className='job-details-div'>
                    <CustomDropdown
                        label="Experience"
                        options={['1 year', '2 years', '3 years', '4 years', '5 years']}
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    <CustomDropdown
                        label="Gender"
                        options={['Female', 'Male', 'Other']}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <div className='job-details-div'>
                    <CustomDropdown
                        label="No of vacancies"
                        options={generateVacanciesOptions(100)} // Generates options from 1 to 100
                        value={vacancies}
                        onChange={(e) => setVacancies(e.target.value)}
                    />
                    <CustomRange
                        label="Age required"
                        options={['20+', '21+', '22+', '23+', '24+', '25+']}
                       from={ageRequiredFrom}
                       to={ageRequiredTo}
                        onChangeFrom={(e) => setAgeRequiredFrom(e.target.value)}
                        onChangeTo={(e) => setAgeRequiredTo(e.target.value)}
                    />
                </div>
                <div className='job-details-div'>
                    <CustomInputField
                        label="Skills"
                        type="text"
                        value={skills}
                        placeholder="Enter your skills here"
                        onChange={(e) => setSkills(e.target.value)}
                    />
                </div>
                <div className='job-details-div'>
                    <CustomInputField
                        label="City"
                        type="text"
                        value={city}
                        placeholder="Enter your city here"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='job-details-textarea'>
                    <CustomTextarea
                        label="Description"
                        value={description}
                        placeholder="Write a short Description about this job"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='job-details-div'>
                    <CustomInputField
                        label="Tags"
                        type="text"
                        value={tags}
                        placeholder="Enter tags relevant to your job"
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <SubmitButton
                    path="#"
                    content="Save and continue"
                    backgroundColor="#007bff"
                    textColor="#fff"
                    handler={handleSubmit}
                />
            </form>
        </div>
    );
};

export default JobDetails;
