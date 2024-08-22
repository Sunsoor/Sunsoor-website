import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, PhoneNumberValidation, SubHeading, SubmitButton } from "../components/subcomponents/Elements";
import axiosInstance from '../services/axiosConfig';
import './BasicInfo.css';

export const BasicInfo = () => {
    const navigate = useNavigate();
    const [validPhoneNumber, setValidPhoneNumber] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        City: ''
    });

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (name === "Email") {
            setValidEmail(isValidEmail(value));
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        if (validPhoneNumber && validEmail) {
            try {
                const jwtToken = localStorage.getItem('jwt');
                
                // Send user details to the server
                const response = await axiosInstance.post('/m1/update/updateUserByMobileNO', {
                    fullName: formData.Name,
                    email: formData.Email,
                    mobileNo: formData.PhoneNumber,
                    city: formData.City
                }, {
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`
                    }
                });

                // Handle response
                if (response.data.status === 'success') {
                    console.log('User details updated successfully:', response.data);

                    if (response.data.message.includes('OTP send to your email')) {
                        alert('OTP sent to your email. Please verify.');
                        // Redirect to OTP page with email verification flag
                        navigate('/otp-page', {
                            state: { 
                                email: formData.Email, 
                                isEmailVerification: true 
                            }
                        });
                    } else {
                        alert('User details updated successfully!');
                        navigate('/home'); // Redirect to home page or wherever appropriate
                    }
                } else {
                    console.error('Failed to update user details:', response.data.message);
                    alert('Failed to update user details.');
                }
            } catch (error) {
                console.error('Error updating user details:', error);
                alert('Error updating user details.');
            }
        } else {
            console.log('Invalid phone number or Email');
            alert('Invalid phone number or Email');
        }
    };

    return (
        <form onSubmit={submitHandler} className='form-container'>
            <SubHeading heading="Basic Information" />
            <p className='head-para'>Fill up your basic Information</p>
            <InputField
                name="Name"
                value={formData.Name}
                placeholder="Ex - Anthony Johnny Dsouza"
                inputHeading="Full Name"
                validInputCode={true}
                changeHandler={changeHandler}
            />
            <InputField
                name="Email"
                type="email"
                value={formData.Email}
                placeholder="Ex - official@gmail.com"
                inputHeading="Email"
                validInputCode={validEmail}
                changeHandler={changeHandler}
            />
            <PhoneNumberValidation
                setFormData={setFormData}
                validPhoneNumber={validPhoneNumber}
                setvalidPhoneNumber={setValidPhoneNumber}
            />
            <InputField
                name="City"
                value={formData.City}
                placeholder="Enter your city"
                inputHeading="City"
                validInputCode={true}
                changeHandler={changeHandler}
            />
            <div>
                <SubmitButton content="Send Code" handler={submitHandler} />
            </div>
        </form>
    );
};

export default BasicInfo;
