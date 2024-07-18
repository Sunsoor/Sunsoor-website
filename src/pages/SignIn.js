import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { FcGoogle } from 'react-icons/fc';
import { InputField, PhoneNumberValidation, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

export const SignIn = () => {
    const navigate = useNavigate();
    const [validreferralCode, setValidreferralCode] = useState(true);
    const [validPhoneNumber, setvalidPhoneNumber] = useState(true);
    const [formData, setFormData] = useState({
        PhoneNumber: '',
        ReferralCode: ''
    });
    const isValidSixDigitNumber = (referralCode) => {
        const sixDigitRegex = /^\d{6}$/;
        return sixDigitRegex.test(referralCode);
    };

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (name === 'ReferralCode') {
            setValidreferralCode(isValidSixDigitNumber(value));
        }
    }
    function submitHandler(event) {
        event.preventDefault();
        if (validreferralCode && validPhoneNumber) {
            navigate('/basic-info');
            const accountData = { ...formData };
            console.log('login data: ', accountData);
        } else {
            console.log('Invalid referral code');
        }
    }

    return (
        <form onSubmit={submitHandler} className='form-container'>

            <SubHeading
                heading="Sign-in/Sign-up"
            />
            <p className='head-para' >You will log in after verification if you are not registered</p>

            <PhoneNumberValidation
                setFormData={setFormData}
                validPhoneNumber={validPhoneNumber}
                setvalidPhoneNumber={setvalidPhoneNumber}
            />
             <InputField 
                validInputCode={validreferralCode}
                value={formData.ReferralCode}
                changeHandler={changeHandler}
                inputHeading="Referral code"
                name = "ReferralCode"
            />
            <div >
                <SubmitButton content="Sent Code" handler={submitHandler} />
            </div>
            <button className='template-button'>
                <FcGoogle className='Gicon' />
                <p>Sign-up with Google</p>
            </button>
        </form>
    );
};
