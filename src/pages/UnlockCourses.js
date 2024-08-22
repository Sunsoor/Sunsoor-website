import React, { useState } from 'react';
import { SubmitButton, UnlockedLecture,CustomPopup } from '../components/subcomponents/Elements';
import './UnlockCourses.css';
import YourProfileTwoData from '../testing data/YourProfileTwoData';


const UnlockCourse = () => {
    const [selectedLectures, setSelectedLectures] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const handleLectureSelection = (id) => {
        setSelectedLectures((prev) =>
            prev.includes(id) ? prev.filter((lectureId) => lectureId !== id) : [...prev, id]
        );
    };

    const calculateTotalPrice = () => {
        return selectedLectures.length * 2;
    };

    const handleContinue = () => {
        setShowPopup(true);
        console.log('Total Price:', calculateTotalPrice() + ' Rs.');
    };

    const handleAccept = () => {
        console.log('Lecture deleted');
        // Implement your delete logic here
        setShowPopup(false);
    };
    
    const handleReject = () => {
        setShowPopup(false);
    };

    return (
        <div className='unlock-lecture-main'>
            <div className="unlock-lecture-heading">
                <h2>Select lecture to unlock</h2>
                <p>Each lecture will <span>cost you 2 Rs.</span></p>
            </div>
            <div>
                {YourProfileTwoData.lectures.filter(lecture => lecture.locked).map((lecture) => (
                    <UnlockedLecture
                        key={lecture.id}
                        lecture={lecture}
                        handleLectureSelection={handleLectureSelection}
                        selectedLectures={selectedLectures}
                    />
                ))}
            </div>
            <SubmitButton
                handler={handleContinue}
                content={`Continue to pay ${calculateTotalPrice()} Rs`}
            />
              {showPopup && (
                <CustomPopup
                    message="Are you sure you want to pay"
                    acceptButtonContent="Pay"
                    rejectButtonContent="Cancel"
                    onAccept={handleAccept}
                    onReject={handleReject}
                    amount = {calculateTotalPrice()}
                />
            )}
        </div>
    );
};

export default UnlockCourse;
