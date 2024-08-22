import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { FcGoogle } from 'react-icons/fc';
import { InputField, PhoneNumberValidation, SubHeading, SubmitButton } from '../components/subcomponents/Elements';
import axiosInstance from '../services/axiosConfig';

export const SignIn = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [validPhoneNumber, setvalidPhoneNumber] = useState(true);
    const [formData, setFormData] = useState({
        PhoneNumber: '',
        ReferralCode: ''
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        
    }

    async function submitHandler(event) {
        event.preventDefault();
        if (validPhoneNumber) {
            try {
                console.log("phone number sending to server: ", formData.PhoneNumber);
                const response = await axiosInstance.post('/m1/api/client/auth/requestOtp', {
                    phoneNo: formData.PhoneNumber,
                });
                if (response.data.status === 'success') {
                    console.log('OTP sent successfully:', response.data);
                    setIsLoggedIn(true);
                    navigate('/otp-page', {
                        state: { phoneNumber: formData.PhoneNumber, referralCode: formData.ReferralCode }
                    });
                } else {
                    console.log('Failed to send OTP:', response.data.message);
                }
            } catch (error) {
                console.error('Error sending OTP:', error);
            }
        } else {
            console.log('Invalid phone number');
        }
    }
    

    return (
        <form onSubmit={submitHandler} className='form-container'>
            <SubHeading heading="Sign-in/Sign-up" />
            <p className='head-para'>You will log in after verification if you are not registered</p>

            <PhoneNumberValidation
                setFormData={setFormData}
                validPhoneNumber={validPhoneNumber}
                setvalidPhoneNumber={setvalidPhoneNumber}
            />
            <InputField
                value={formData.ReferralCode}
                changeHandler={changeHandler}
                inputHeading="Referral code"
                name="ReferralCode"
            />
            <div>
                <SubmitButton content="Send Code" handler={submitHandler} />
            </div>
            <button className='template-button'>
                <FcGoogle className='Gicon' />
                <p>Sign-up with Google</p>
            </button>
        </form>
    );
};
