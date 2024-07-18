import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './Lecture.css';

const Lecture = ({ title, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path); // Use the path prop for navigation
  };

  return (
    <div className="lecture-container">
      <p className="lecture-title">{title}</p>
      <button className="play-button" onClick={handleClick}>
        <FaPlay />
      </button>
    </div>
  );
};

export default Lecture;
