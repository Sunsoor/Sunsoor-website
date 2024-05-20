import React from 'react';
import handshake from '../assets/handshake-close-up-executives.png'
import './Section01.css';

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="content">
        <div className="image-container">
          <img 
            src={handshake}
            alt="Handshake"
          />
        </div>
        <div className="text-container01">
          <h1>Get <span className="highlight">Blue</span> collar jobs</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Felis lectus a viverra in sit. Nunc diam in id gravida purus iaculis. Porta sed ac purus nulla ullamcorper sit. Vitae amet mauris duis vitae eu sed id turpis neque. Etiam ornare dui hac quis proin nunc lobortis sit nunc. Maecenas enim tortor id eget suspendisse ultrices est a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
