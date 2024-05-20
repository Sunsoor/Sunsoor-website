import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-item">
                    <div className="logo-container">
                        <div className="logo"></div>
                        <h2>Sunsor</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit.
                        Nunc diam in id gravida purus iaculis.
                    </p>
                </div>
                <div className="footer-item">
                    <h3>Support</h3>
                    <a href="mailto:support@sunsor.in">Support@sunsor.in</a>
                    <a href="tel:+7124567830">Customer support</a>
                    <a href="tel:+7124567830">7124567830</a>
                </div>
                <div className="footer-item">
                    <h3>Legal</h3>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-and-conditions">Terms & Conditions</a>
                    <a href="/refund-policy">Refund Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Sunsor Job portal & E learning App Pvt Ltd. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
