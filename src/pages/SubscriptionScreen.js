import React from 'react';
import JobDetailsCard from '../components/JobDetailsCard';
import {  SubHeading, SubmitButton } from '../components/subcomponents/Elements';
import './SubscriptionScreen.css'



const SubscriptionScreen = () => {
    const handleSubmit = async (e) => {
       console.log("Subscription confirm !!")
    };
    return (
        <div className='subscription-page'>
            <SubHeading heading="Job details" />
            <p className='subscription-para'>Fill up your Job posting details</p>
            <JobDetailsCard 
                label='Post this ad for'
                duration = '1 MONTH'
                price = 'Rs 299/-'
                description ='your post will be active for 1 month after that it will be automatically deleted'
            />
            <SubmitButton 
                    path="/"
                    content="Continue"
                    handler={handleSubmit} 
                    />
        </div>
    );
};

export default SubscriptionScreen;