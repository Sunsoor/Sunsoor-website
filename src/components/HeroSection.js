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
            <div className='hero-content'>
                <h1 className='hero-heading' ><span className='hero-highlight'>Sunsoor</span> Job Portal & E-Learning Platform</h1>
                <div className="hero-buttons">
                    <a href="/login" className="hero-login">Login</a>
                    <a href="/signup" className="hero-signup">Sign up</a>
                </div>
                <div className="hero-qr-code">
                    <img src={qrCodeImage} alt="QR Code" className='hero-qr' />
                    <div className='hero-qr-Scan'>
                    <img src={arrow} alt="" className='hero-arrow'/>
                    <p className='hero-scan-to-download'>Scan to download</p>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default HeroSection;
