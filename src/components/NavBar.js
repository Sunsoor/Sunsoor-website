import React, { useState } from 'react';
import './NavBar.css';
import manu from "../assets/Menu.svg"
import { CustomButton, Logo } from './subcomponents/Elements';

const Navbar = () => {
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
                            content="Download now"
                            path="/download-now" />
                    </div>

                    <div className="download-container">
                        <button className="manu-button" onClick={toggleDropdown}>
                            <img src={manu} alt="Download" className='manu-img' />
                        </button>
                        {isDropdownVisible && (
                            <div className="dropdown">
                                <ul>
                                    <li><CustomButton
                                        content="Download now"
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
