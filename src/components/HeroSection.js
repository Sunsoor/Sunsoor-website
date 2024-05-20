// HeroSection.js
import React from 'react';
import './HeroSection.css';
import phoneImage from '../assets/phone.png';
import qrCodeImage from '../assets/QR.png'; 
import arrow from '../assets/Vector 10.png'

const HeroSection = () => {
    return (
        <main className="hero-section">
            <div className="phone-image-container">
                <img src={phoneImage} alt="Phone" className="phone-image" />
            </div>
            <div className='content'>
                <h1><span>Sunsoor</span> Job Portal & E-Learning Platform</h1>
                <div className="buttons">
                    <a href="/login" className="login">Login</a>
                    <a href="/signup" className="signup">Sign up</a>
                </div>
                <div className="qr-code">
                    <img src={qrCodeImage} alt="QR Code" className='qr' />
                    <div className='qr_Scan'>
                    <img src={arrow} alt="" className='arrow'/>
                    <p>Scan to download</p>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default HeroSection;
