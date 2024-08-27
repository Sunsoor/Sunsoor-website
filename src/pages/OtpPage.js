import React, { useState } from 'react';
import './OtpPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import OTPPhone from "../assets/OTP 3.svg"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { SubHeading, SubmitButton } from '../components/subcomponents/Elements';
import axiosInstance from '../services/axiosConfig';

const OtpPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState(false);

    // Access phone number, referral code, and email passed from the previous page
    const { phoneNumber, referralCode, email, isEmailVerification } = location.state || {};

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleResendOtp = async () => {
        try {
            let response;
            if (isEmailVerification) {
                console.log("otp sended sucessfully on email");
                response = await axiosInstance.post('/m1/update/requestOtpForEmail', {
                    email: email,
                });
            } else {
                console.log("otp sended sucessfully on phone number");
                response = await axiosInstance.post('/m1/api/client/auth/requestOtp', {
                    phoneNo: phoneNumber,
                });
            }

            if (response.data.status === 'success') {
                console.log('OTP resent successfully:', response.data);
                setError(false); // Reset any previous errors
                alert('OTP has been resent successfully!');
            } else {
                console.log('Failed to resend OTP:', response.data.message);
                setError(true);
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            setError(true);
        }
    };


    const OtpSubmit = async () => {
        const enteredOtp = otp.join('');

        try {
            let response;

            if (isEmailVerification) {
                // Verify OTP for email
                console.log("OTP :",enteredOtp)
                response = await axiosInstance.post('/m1/update/verifyOtpForEmail', {
                    otp: enteredOtp,
                    email: email,
                });
            } else {
                // Verify OTP for phone number
                response = await axiosInstance.post('/m1/api/client/auth/verifyOtp', {
                    otp: enteredOtp,
                    phoneNo: phoneNumber,
                    refferalCode: referralCode,
                });
            }

            if (response.data.status === 'success') {
                console.log('OTP verified successfully:', response.data);

                // Store JWT token and email in localStorage
                localStorage.setItem('jwtToken', response.data.jwt);
                if (email) {
                    localStorage.setItem('email', email);
                }

                alert('OTP authenticated successfully!');
                navigate('/basic-info');
            } else {
                console.log('Failed to verify OTP:', response.data.message);
                setError(true);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError(true);
        }
    };

    return (
        <div className="otp-container">
            <img src={OTPPhone} className="otp-image" alt="Phone with check mark" />
            <SubHeading
                heading="Enter 6 digit OTP"
            />
            <p className='subpara'>sent to {isEmailVerification ? email : `+${phoneNumber}`}</p>
            <div>
                <div className="otp-inputs">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className={error ? 'errorOTP' : 'otp-field'}
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                            />
                        );
                    })}
                </div>
                {error && (
                    <div className="InvalidTextBox">
                        <AiOutlineExclamationCircle className="TextInvlid" />
                        <p className="TextInvlid" >Invalid OTP</p>
                    </div>
                )}
            </div>
            <SubmitButton
                content="Authenticate code"
                handler={OtpSubmit}
            />
            <p className="resend-text">
                Not received your code? <span onClick={handleResendOtp} className='resend-text-link'>Resend code</span>
            </p>

        </div>
    );
};

export default OtpPage;
