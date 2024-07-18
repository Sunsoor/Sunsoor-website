import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './CourseSearchBar.css'
function CourseSearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Search Course:', query);

    // Replace the URL with your backend endpoint
    const url = 'http://your-backend-url.com/search';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error backend is not connect :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='CourseSearchfrom'>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search courses"
        className='Coursesearchinput'
      />
      <button type="submit" className='CourseSearchButton'>
      <FaSearch />
      </button>
    </form>
  );
}

export default CourseSearchBar;
