
import React, { useState } from 'react';
import './NavBar.css';
import manu from "../assets/Menu.svg"

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    return (
        <header className="navBar">
            <div className='navBar-container'>
                <div className='navBar-logo-container'>
                    <div className='navBar-logo'></div>
                    <div className="logo-heading">Sunsoor</div>
                </div>
                {/*<a href="/" className='nav_items'>Home</a>*/}
                <div className='navBar-ManuSection'>
                    <a href="/" className="download-app">Download App</a>
                    <div className="download-container">
                        <button className="download-button" onClick={toggleDropdown}>
                            <img src={manu} alt="Download" />
                        </button>
                        {isDropdownVisible && (
                            <div className="dropdown">
                                <ul>
                                    <li><a href="/" className="download-app-manu">Download App</a></li>
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
