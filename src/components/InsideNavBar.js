import React, { useState } from 'react';
import './InsideNavBar.css';
import { NavLinks, CustomButton, Logo } from './subcomponents/Elements';
import { GoBellFill, } from "react-icons/go";
import { AiFillWallet } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import manu from "../assets/Menu.svg"
import { useTranslation } from 'react-i18next';


const InsideNavBar = () => {
  const { t } = useTranslation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  

  return (
    <header className="inside-nav-bar">
      <div className='navBar-containe'>
        <Logo path="/" />
        <div className='nav-links'>
      <NavLinks
        path="/"
        content="Home"

      />
      <NavLinks
        path="/post"
        content="Post"

      />
      <NavLinks
        path="/refer-earn"
        content="Refer & Earn"
  
      />
    </div>
        <div className='nav-icons'>
          <GoBellFill fontSize={30} color='#3A3A3A' className='icon' />
          <AiFillWallet fontSize={30} color='#3A3A3A' className='icon' />
          <FaUserCircle fontSize={30} color='#3A3A3A' className='icon' />
          <div className="download-container">
            <button className="manu-button" onClick={toggleDropdown}>
              <img src={manu} alt="Download" className='manu-img' />
            </button>
            {isDropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li><CustomButton
                    content={t("downloadNow")}
                    path="/download-now" /></li>
                </ul>
              </div>
            )}
          </div>
        </div>


      </div>

    </header>
  );
};

export default InsideNavBar;
