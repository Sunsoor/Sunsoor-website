// HeroSection.js
import React from 'react';
import './HeroSection.css';
import phoneImage from '../assets/phone.png';
import qrCodeImage from '../assets/QR.png';
import arrow from '../assets/Vector 10.png'
import { CustomButton, MainHeading } from './subcomponents/Elements';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <main className="hero-section">
            <div className="phone-image-container">
                <img src={phoneImage} alt="Phone" className="phone-image" />
            </div>
            <div className='hero-content'>
                <MainHeading
                    highlight={t("platformInfo.heading.highlight")}
                    posthighlight={t("platformInfo.heading.posthighlight")}
                />
                <div className="hero-buttons">
                    <CustomButton
                        content={t("platformInfo.buttons.login")}
                        path="/"
                        backgroundColor="#ffffff"
                        textColor="#268AFF"
                    />
                    <CustomButton
                        content={t("platformInfo.buttons.signup")}
                        path="/"

                    />
                </div>
                <div className="hero-qr-code">
                    <img src={qrCodeImage} alt="QR Code" className='hero-qr' />
                    <div className='hero-qr-Scan'>
                        <img src={arrow} alt="" className='hero-arrow' />
                        <p className='hero-scan-to-download'>{t("platformInfo.qrCode")}</p>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default HeroSection;
