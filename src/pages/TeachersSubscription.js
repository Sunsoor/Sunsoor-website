import React, { useState } from 'react';
import JobDetailsCard from '../components/JobDetailsCard';
import { CustomPopup, SubHeading, SubmitButton } from '../components/subcomponents/Elements';
import './TeachersSubscription.css'



const TeachersSubscription = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleSubmit = async (e) => {
        console.log("Buy Subscription")
        setPopupVisible(true)
    };

    const handleAccept = () => {
        console.log('Payment accepted');
        setPopupVisible(false);
    };

    const handleReject = () => {
        console.log('Payment rejected');
        setPopupVisible(false);
    };

    return (
        <div className='subscription-page'>
            <SubHeading heading="Buy Subscription" />
            <p className='subscription-para'>Buy subscription and start posting courses</p>
            <JobDetailsCard
                label='Get subscription'
                duration='1 YEAR'
                price='Rs 1,999/-'
                description='Buy purchasing this subscription you can post unlimited courses for 1 year.'
            />
            <SubmitButton
                path="/"
                content="Continue"
                handler={handleSubmit}
            />
            {isPopupVisible && (
                <CustomPopup
                    amount="50"
                    message="Are you sure you want to pay?"
                    acceptButtonContent="Pay"
                    rejectButtonContent="Cancel"
                    onAccept={handleAccept}
                    onReject={handleReject}
                />
            )}

        </div>
    );
};

export default TeachersSubscription;