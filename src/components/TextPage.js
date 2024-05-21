import React from 'react';
import './TextPage.css';

const TextPage = (props) => {
 return (
   <div className="TextPage-container">
     <h2 className='TextPage-heading'>{props.heading}</h2>
     <p className='TextPage-contant'>
       {props.contant01}
     </p>
     <p className='TextPage-contant'>
       {props.contant02}
     </p>
     <p className='TextPage-contant'>
       {props.contant03}
     </p>

     {/* Rest of the content */}
   </div>
 );
};

export default TextPage;