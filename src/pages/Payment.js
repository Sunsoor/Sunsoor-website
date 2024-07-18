import React, { useState } from 'react';
import './Payment.css'; // Import your CSS for styling
import { CustomPopup, SubHeading, SubmitButton } from '../components/subcomponents/Elements';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleContinue = () => {
        setPopupVisible(true);
    };

    const handleAccept = () => {
        console.log(`Payment of ${amount} accepted`);
        setPopupVisible(false);
    };

    const handleReject = () => {
        console.log('Payment rejected');
        setPopupVisible(false);
    };

    return (
        <div className="payment-container">
            <SubHeading heading="Add Amount" />
            <p className='payment-message'>Enter amount to add in your wallet</p>
            <div className='payment-input'>
                <p className='payment-label'>Enter amount to Add</p>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="10 Rs."
                    className="amount-input"
                />
            </div>


            <SubmitButton
                handler={handleContinue}
                content="Continue to Add"
            />
            {isPopupVisible && (
                <CustomPopup
                    amount={`${amount}`}
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

export default Payment;
