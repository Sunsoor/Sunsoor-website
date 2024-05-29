import React from 'react';
import './Section.css';
import learning from '../assets/plan-graph-knowledge-steps.png'
import {ParaContain, MainHeading } from './subcomponents/Elements';
const SectionTwo = () => {
  return (
    <div className="section-main">
      <div className="section-content02">
        <div className="section-text-container02">
        <MainHeading 
          prehighlight = "Upgrade "
          highlight = "your skills"
        />
          <ParaContain
           content = "Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit. Nunc diam in id gravida purus iaculis. Porta sed ac purus nulla ullamcorper sit. Vitae amet mauris duis vitae eu sed id turpis neque. Etiam ornare dui hac quis proin nunc lobortis sit nunc. Maecenas enim tortor id eget suspendisse ultrices est a."
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
