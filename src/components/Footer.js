import React from 'react';
import './Footer.css';
import { CustomLinks, Logo, ParaContain, SubHeading } from './subcomponents/Elements';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-item">
                    
                    <Logo/>
                    <ParaContain
                    content = "Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit Nunc diam in id gravida purus iaculis" />
                </div>
                <div className="footer-item">
                    
                    <SubHeading heading = "Support"/>
                    <CustomLinks path ="mailto:support@sunsor.in" content = "Support@sunsor.in" />
                    <CustomLinks path ="tel:+7124567830" content = "Customer support" />
                    <CustomLinks path ="tel:+7124567830" content = "7124567830" />
                </div>
                <div className="footer-item">
                    
                    <SubHeading heading = "Legal"/>
                    <CustomLinks path ="/privacy-policy" content = "Privacy Policy" />
                    <CustomLinks path ="/terms-and-conditions" content = "Terms & Conditions" />
                    <CustomLinks path ="/refund-policy" content = "Refund Policy" />
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p>Sunsor Job portal & E learning App Pvt Ltd. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
