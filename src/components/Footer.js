import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-item">
                    <div className="footer-logo-container">
                        <div className="footer-logo"></div>
                        <h2 className='footer-heading'>Sunsor</h2>
                    </div>
                    <p className='footer-para'>
                        Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit.
                        Nunc diam in id gravida purus iaculis.
                    </p>
                </div>
                <div className="footer-item">
                    <h3 className='footer-subHeading'>Support</h3>
                    <a className='footer-links' href="mailto:support@sunsor.in">Support@sunsor.in</a>
                    <a className='footer-links' href="tel:+7124567830">Customer support</a>
                    <a className='footer-links' href="tel:+7124567830">7124567830</a>
                </div>
                <div className="footer-item">
                    <h3 className='footer-subHeading'>Legal</h3>
                    <a className='footer-links' href="/privacy-policy">Privacy Policy</a>
                    <a className='footer-links' href="/terms-and-conditions">Terms & Conditions</a>
                    <a className='footer-links' href="/refund-policy">Refund Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Sunsor Job portal & E learning App Pvt Ltd. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
