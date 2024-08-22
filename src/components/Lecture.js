import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import './Lecture.css';
import { CustomPopup } from '../components/subcomponents/Elements';

const Lecture = ({ title, path, locked, role, price }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    if (!locked || role === "teacher") {
      navigate(path); // Use the path prop for navigation
    }
  };

  const unlockHandler =()=>{
    setShowPopup(true);
  }

  const handleAccept = () => {
    console.log('Lecture deleted');
    // Implement your delete logic here
    setShowPopup(false);
};

const handleReject = () => {
    setShowPopup(false);
};
  
  return (
    <div className="lecture-container">
      <p className="lecture-title">{title}</p>
      <div>
        {locked && role !== "teacher" ? (
          <button className="lock-button" onClick={unlockHandler} >
            <MdLockOutline />
          </button>
        ) : (
          <button className="play-button" onClick={handleClick}>
            <FaPlay />
          </button>
        )}
      </div>
      {showPopup && (
                <CustomPopup
                    message="Are you sure you want to pay"
                    acceptButtonContent="Pay"
                    rejectButtonContent="Cancel"
                    onAccept={handleAccept}
                    onReject={handleReject}
                    amount = {price}
                />
            )}
    </div>
  );
};

export default Lecture;
