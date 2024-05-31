import React, { useState } from 'react';
import i18n from 'i18next';
import { CustomDropdown } from './subcomponents/Elements';
import dropdownIcon from '../assets/globe.png'; // Ensure this path is correct
import './LanguageSector.css';

const LanguageSelector = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'hi', lang: 'Hindi' },
    // Add more languages as needed
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownVisible(false); // Hide dropdown after selecting a language
  };

  const options = languages.map((lng) => ({
    value: lng.code,
    label: lng.lang,
  }));

  return (
    <div className="language-selector">
      <button
        className="dropdown-toggle-button"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
      >
        <img src={dropdownIcon} alt="Dropdown" className='globe-img'/>
      </button>
      {isDropdownVisible && (
        <CustomDropdown
          options={options}
          selectedValue={i18n.language}
          onChange={changeLanguage}
          className="language-dropdown"
        />
      )}
    </div>
  );
};

export default LanguageSelector;
