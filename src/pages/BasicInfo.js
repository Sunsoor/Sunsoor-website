import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, PhoneNumberValidation, SubHeading, SubmitButton } from "../components/subcomponents/Elements";
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

    const submitHandler = (event) => {
        event.preventDefault();
        if (validPhoneNumber && validEmail) {
            navigate('/otp-page');
            const accountData = { ...formData };
            console.log('login data: ', accountData);
        } else {
            console.log('Invalid phone number or Email');
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
            <div >
                <SubmitButton content="Sent Code" handler={submitHandler} />
            </div>
        </form>
    );
};

export default BasicInfo;
