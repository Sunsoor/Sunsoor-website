import React from 'react';
import handshake from '../assets/handshake-close-up-executives.png'
import './Section.css';
import {ParaContain, MainHeading } from './subcomponents/Elements';

const SectionOne = () => {
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
          prehighlight = "Get "
          highlight = "Blue "
          posthighlight = "collar jobs"
        />
          
          <ParaContain
           content = "Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit. Nunc diam in id gravida purus iaculis. Porta sed ac purus nulla ullamcorper sit. Vitae amet mauris duis vitae eu sed id turpis neque. Etiam ornare dui hac quis proin nunc lobortis sit nunc. Maecenas enim tortor id eget suspendisse ultrices est a."
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
