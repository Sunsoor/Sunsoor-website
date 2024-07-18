import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CompanyDetails.css'; // Make sure to import the CSS file
import { CustomFileUploader, CustomInputField, CustomTextarea, PhoneNumberValidation, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

const CompanyDetails = () => {
    const navigate = useNavigate();
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const [formData, setFormData] = useState({
        companyName: '',
        companyId: '',
        companyAddress: '',
        description: '',
        companyLogo: null,
        companyImages: null,
        companyPhoneNumber: '',
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
        formDataToSubmit.append('companyName', formData.companyName);
        formDataToSubmit.append('companyId', formData.companyId);
        formDataToSubmit.append('companyAddress', formData.companyAddress);
        formDataToSubmit.append('description', formData.description);
        if (formData.companyLogo) {
            formDataToSubmit.append('companyLogo', formData.companyLogo);
        }
        if (formData.companyImages) {
            formDataToSubmit.append('companyImages', formData.companyImages);
        }
        formDataToSubmit.append('companyPhoneNumber', formData.companyPhoneNumber);

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
        <div className='company-details-main'>
            <form onSubmit={handleSubmit} className='company-details-form'>
                <SubHeading heading="Company details" />
                <p className='company-form-para'>Fill up your Company details</p>
                <div className='company-input-field'>
                    <div className='company-details-div'>
                        <CustomInputField
                            label="Company name"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            placeholder="Enter your company name here"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='company-details-div'>
                        <CustomInputField
                            label="Company ID"
                            type="text"
                            name="companyId"
                            value={formData.companyId}
                            placeholder="Enter your company ID here"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='company-details-div'>
                        <CustomInputField
                            label="Company address"
                            type="text"
                            name="companyAddress"
                            value={formData.companyAddress}
                            placeholder="Enter your company address here"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='company-details-div'>
                        <CustomTextarea
                            label="Description"
                            name="description"
                            value={formData.description}
                            placeholder="Write a short description about your company"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='company-details-div'>
                        <CustomFileUploader
                            label="Company logo"
                            name="companyLogo"
                            accept=".jpg,.png"
                            placeholder="Upload your Company logo or profile"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='company-details-div'>
                        <CustomFileUploader
                            label="Company Images"
                            name="companyImages"
                            accept=".jpg,.png"
                            placeholder="Upload your Company photos (office or staff photos)"
                            onChange={handleFileChange}
                        />
                    </div>
                   
                        <PhoneNumberValidation
                            name="companyPhoneNumber"
                            setFormData={setFormData}
                            validPhoneNumber={validPhoneNumber}
                            setvalidPhoneNumber={setValidPhoneNumber}
                        />
                    
                </div>
                <SubmitButton content="Save and continue" />
            </form>
        </div>
    );
};

export default CompanyDetails;
