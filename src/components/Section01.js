import React from 'react';
import handshake from '../assets/handshake-close-up-executives.png'
import './Section.css';
import {ParaContain, MainHeading } from './subcomponents/Elements';
import { useTranslation } from 'react-i18next';

const SectionOne = () => {
  const {t} = useTranslation();
  return (
    <div className="section-main">
      <div className="section-content01">
        <div className="section-image-container">
          <img 
            src={handshake}
            alt="Handshake"
            className="section-image"
          />
        </div>
        <div className="section-text-container01">
        <MainHeading 
          prehighlight = {t("getBlueCollarJobs.title.prehighlight")}
          highlight = {t("getBlueCollarJobs.title.highlight")}
          posthighlight = {t("getBlueCollarJobs.title.posthighlight")}
        />
          
          <ParaContain
           content = {t("getBlueCollarJobs.description")}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
