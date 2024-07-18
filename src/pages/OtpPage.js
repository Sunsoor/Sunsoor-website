import React, { useState } from 'react';
import './OtpPage.css';
import { useNavigate } from 'react-router-dom';
import OTPPhone from "../assets/OTP 3.svg"
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { SubHeading, SubmitButton } from '../components/subcomponents/Elements';


const OtpPage = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [error, setError] = useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const OtpSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp === "145236") {
            // OTP matched, proceed further
            console.log(enteredOtp)
            alert("OTP authenticated successfully!");
            navigate('/Login_T&C');
            
        } else {
            // OTP didn't match
            setError(true);
        }
    };


    return (
        <div className="otp-container">
            <img src={OTPPhone} className="otp-image" alt="Phone with check mark" />
            <SubHeading
                heading="Enter 6 digit OTP"
            />

            <p className='subpara'>sent to +919833456730</p>
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
                        <p className="TextInvlid" >Invalid number</p>
                    </div>
                )}
            </div>

            <SubmitButton
                content="Authenticate code"
                handler={OtpSubmit}
            />
            <p className="resend-text">
                Not received your code? <a href="/" className='resend-text-link'>Resend code</a>
            </p>
        </div>
    );
};

export default OtpPage;
