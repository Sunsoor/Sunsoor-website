// src/ELearning.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import CourseSearchBar from './CourseSearchBar';

const ELearning = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }} >
      
      <CourseSearchBar/>
      <CourseCard/>
    </div>
  );
};

export default ELearning;
