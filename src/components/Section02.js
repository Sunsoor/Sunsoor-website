import React from 'react';
import './Section01.css';
import learning from '../assets/plan-graph-knowledge-steps.png'

const SectionTwo = () => {
  return (
    <div className="section-one">
      <div className="content">
        <div className="text-container02">
          <h1>Upgrade <span className="highlight">your skills</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit. Nunc diam in id gravida purus iaculis. Porta sed ac purus nulla ullamcorper sit. Vitae amet mauris duis vitae eu sed id turpis neque. Etiam ornare dui hac quis proin nunc lobortis sit nunc. Maecenas enim tortor id eget suspendisse ultrices est a.
          </p>
        </div>
        <div className="image-container">
          <img 
            src={learning} 
            alt="Learning Tablet"
            className="hero-image" 
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
