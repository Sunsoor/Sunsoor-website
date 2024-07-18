import React, { useEffect, useState } from 'react';
/*import axios from 'axios';*/
import './DeliveryBoy.css';
import dummyJobDetails from '../testing data/dummyJobDetails'
import { IoPersonOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import {SubmitButton} from '../components/subcomponents/Elements'

const DeliveryBoy = () => {
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        console.log("in useeffect")
        const fetchJobDetails = async () => {
            try {
                /*const response = await axios.get('/public/jobDetails.json');
                setJobDetails(response.data);*/
                setJobDetails(dummyJobDetails);
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, []);

    if (!jobDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="job-details-container">
            <div className="job-details-header">
                <h1>{jobDetails.jobTitle}</h1>
                <h2>{jobDetails.salary}</h2>
            </div>
            <div className="company-details">
                <div className='company-info'>
                    <div className='company-name'>
                        <img src={jobDetails.company.logo} alt="Company Logo" className="company-logo" />
                        <div>
                            <h3>{jobDetails.company.name}</h3>
                            <h4>{jobDetails.company.name}</h4>
                        </div>
                    </div>
                    <p>{jobDetails.company.description}</p>
                </div>
                <button className="company-details-button">Company details</button>
            </div>

            <div className="job-info">
                <div>
                    <p><span className="job-info-label"> <IoPersonOutline size={18} /> Gender</span> {jobDetails.gender}</p>
                    <p><span className="job-info-label"><GrGroup size={18} /> Vacancies</span> {jobDetails.vacancies}</p>

                </div>
                <div>
                    <p><span className="job-info-label"><HiOutlineShoppingBag size={18} /> Experience</span> {jobDetails.experience}</p>
                    <p><span className="job-info-label"><SlLocationPin size={18} /> City</span> {jobDetails.city}</p>
                </div>
            </div>
            <div className="skills">
                <h4>Skills</h4>
                <div className="skills-list">
                    {jobDetails.skills.map((skill, index) => (
                        <span key={index} className="skill">{skill}</span>
                    ))}
                </div>
            </div>
            <div className="job-discription">
                <h4>Job description</h4>
                <p>{jobDetails.description}</p>
            </div>
            <div >
                <h4 className='contact'>Contact</h4>
                <div className='company-name'>
                        <img src={jobDetails.contact.logo} alt="contact" className="company-logo" />
                        <div>
                            <h3>{jobDetails.contact.name}</h3>
                            <h4>{jobDetails.contact.post}</h4>
                        </div>
                    </div>
            </div>
            <div className='edit-button'>
            <SubmitButton content = "Edit Ad"/>

            </div>
        </div>
    );
};

export default DeliveryBoy;
