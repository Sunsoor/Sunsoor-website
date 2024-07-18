import React from 'react';
import './JobDetailsCard.css';
import { SubHeading } from './subcomponents/Elements';

const JobDetailsCard = (props) => {
    return (
        <div className="job-details-card-container">

            <p className="job-details-card-title">{props.label}</p>
            <div className="job-details-card">
                <div className="job-details-card-content">
                    <p className='job-duration'>{props.duration}</p>
                    <SubHeading heading={props.price} />
                    <a href="/" className="purchase-link">Purchase now</a>
                    <p className="job-details-card-footer">
                       {props.description} 
                    </p>
                </div>
            </div>


        </div>
    );
};

export default JobDetailsCard;
