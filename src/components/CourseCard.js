// src/CourseCard.js
import React, { useEffect, useState } from 'react';
import { HiOutlineUserGroup } from "react-icons/hi2";
import './CourseCard.css';
import { mockCourseData } from '../testing data/CourseCardData';

const CourseCard = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCourseData(mockCourseData);
    };

    fetchData();
  }, []);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-card">
      <img src={courseData.imageUrl} alt="Course" className="course-image" />
      <div className="course-content">
        <h2 className="course-title">{courseData.title}</h2>
        <p className="course-instructor">{courseData.instructor}</p>
        <div className="course-footer">
          <div className="course-students">
            <HiOutlineUserGroup /> {courseData.students}
          </div>
          <div className="course-price">
            {courseData.price} Rs. <span className="per-episode">per episode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
