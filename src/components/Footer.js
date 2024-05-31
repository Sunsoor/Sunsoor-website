import React from 'react';
import './Footer.css';
import { CustomLinks, Logo, ParaContain, SubHeading } from './subcomponents/Elements';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-item">
                    
                    <Logo/>
                    <ParaContain
                    content ={t("companyInfo.description")} />
                </div>
                <div className="footer-item">
                    
                    <SubHeading heading = {t("Support.title")}/>
                    <CustomLinks path ="mailto:support@sunsor.in" content = "Support@sunsor.in" />
                    <CustomLinks path ="tel:+7124567830" content = {t("Support.customersupport")} />
                    <CustomLinks path ="tel:+7124567830" content = "7124567830" />
                </div>
                <div className="footer-item">
                    
                    <SubHeading heading = {t("legal.title")} />
                    <CustomLinks path ="/privacy-policy" content = {t("legal.privacyPolicy")} />
                    <CustomLinks path ="/terms-and-conditions" content = {t("legal.termsAndConditions")} />
                    <CustomLinks path ="/refund-policy" content = {t("legal.refundPolicy")} />
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p>Sunsor Job portal & E learning App Pvt Ltd. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
