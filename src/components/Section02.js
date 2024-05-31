import React from 'react';
import './Section.css';
import learning from '../assets/plan-graph-knowledge-steps.png'
import {ParaContain, MainHeading } from './subcomponents/Elements';
import { useTranslation } from 'react-i18next';
const SectionTwo = () => {
  const {t} = useTranslation();
  return (
    <div className="section-main">
      <div className="section-content02">
        <div className="section-text-container02">
        <MainHeading 
          prehighlight = {t("upgradeSkills.title.prehighlight")}
          highlight = {t("upgradeSkills.title.highlight")}
        />
          <ParaContain
           content = {t("upgradeSkills.description")}
          />
        </div>
        <div className="section-image-container">
          <img 
            src={learning} 
            alt="Learning Tablet"
            className="section-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
