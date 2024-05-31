import React, { useState } from 'react';
import './NavBar.css';
import manu from "../assets/Menu.svg"
import { CustomButton, Logo } from './subcomponents/Elements';
import LanguageSelector from './LanguageSector';
import { useTranslation } from 'react-i18next';



const Navbar = () => {
    const {t} = useTranslation();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    
    
    return (
        <header className="navBar">
            <div className='navBar-container'>
                <Logo path = "/" />
                <div className='navBar-ManuSection'>
                    <div className='downloadbutton'>
                        <CustomButton
                            content={t("downloadNow")}
                            path="/download-now" />
                    </div>
            <LanguageSelector/>
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

export default Navbar;
