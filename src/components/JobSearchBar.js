import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './JobSearchBar.css';
import { GoChevronDown } from "react-icons/go";

const locationData = {
  Maharashtra: ['Mumbai', 'Pune'],
  Karnataka: ['Bangalore', 'Mysore'],
  TamilNadu: ['Chennai', 'Coimbatore'],
  // Add more states and cities as needed
};

const LocationSearchBar = () => {
  const [skill, setSkill] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity(''); // Reset city when state changes
    setShowCityDropdown(true); // Show city dropdown when state is selected
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setShowCityDropdown(false); // Hide city dropdown after selection
    setShowStateDropdown(false);// Hide State dropdown after selection
  };

  const handleSearch = () => {
    const searchDetails = {
      skill,
      location: {
        state: selectedState,
        city: selectedCity,
      },
    };
    console.log(" Search Job and Loaction : " ,searchDetails);
    // Perform search action with searchDetails
  };

  return (
    <div className="location-search-bar">
      <input
        type="text"
        placeholder="Search Job"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="skill-input"
      />
      <span className="divider"></span>
      <div className="location-dropdown">
        <button
          className="location-dropdown-button"
          onClick={() => setShowStateDropdown(!showStateDropdown)}
        >
          {selectedState ? (selectedCity ? selectedCity : selectedState) : 'Enter your location'} <span className='downarrow'><GoChevronDown size={35} style={{ margin: '10px 75px' }}/></span>

        </button>
        <div className='dropdown-options'>
        {showStateDropdown && (
          <div className="location-dropdown-state">
            {Object.keys(locationData).map((state) => (
              <button
                key={state}
                className={`state-button ${selectedState === state ? 'active' : ''}`}
                onClick={() => handleStateChange(state)}
              >
                {state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        )}
        {showCityDropdown && selectedState && (
          <div className="location-dropdown-city">
            {locationData[selectedState].map((city) => (
              <button
                key={city}
                className={`city-button ${selectedCity === city ? 'active' : ''}`}
                onClick={() => handleCityChange(city)}
              >
                {city}
              </button>
            ))}
          </div>
        )}
        </div>
        
      </div>
      <button onClick={handleSearch} className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default LocationSearchBar;
