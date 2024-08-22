// src/ELearning.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseSearchBar from './CourseSearchBar';
import './Elearning.css'

const ELearning = () => {
  return (
    <div className='Elearning-main' >
      
      <CourseSearchBar/>
      <div className='courses'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        </div>
    </div>
  );
};

export default ELearning;
