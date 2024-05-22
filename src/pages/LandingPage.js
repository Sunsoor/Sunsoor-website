import React from 'react'
import SectionTwo from '../components/Section02';
import HeroSection from "../components/HeroSection";
import SectionOne from '../components/Section01';

const LandingPage = () => {
    return (
        <div>
            {<HeroSection/>}
            {<SectionOne/>}
            {<SectionTwo/>}
        </div>
    )
}
export default LandingPage;