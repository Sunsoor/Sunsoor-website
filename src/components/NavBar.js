
import React from 'react';
import './NavBar.css';
import manu from "../assets/Menu.svg"

const Navbar = () => {
    return (
        <header className="navbar">
            <div className='Nav_container'>
                <div className='logo_container'>
                    <div className='logo'></div>
                    <div className="logo_heading">Sunsoor</div>
                </div>
                {/*<a href="/" className='nav_items'>Home</a>*/}
                <div className='nav_last'>
                    <a href="/" className="download-app">Download App</a>
                    <img src={manu} alt="" className='manu' />
                </div>

            </div>

        </header>
    );
};

export default Navbar;
