import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SubHeading, SubmitButton } from '../components/subcomponents/Elements';
import { MainHeading, ParaContain } from '../components/subcomponents/Elements';
/*import { useTranslation } from 'react-i18next';*/
import './AppTermsAndConditions.css'

const AppTermsAndConditions = ({setIsLoggedIn}) => {
  /*const { t } = useTranslation();*/
  const isSmallScreen = useMediaQuery({ query: '(max-width: 480px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const containerStyle = {
    padding: isSmallScreen ? '2em 3em' : isMediumScreen ? '3em 5em' : '4em 8em'
  };


  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isAgreed) {
      alert("You have agreed to the terms and conditions.");
      setIsLoggedIn(true);
      // Redirect to the next page or perform other actions here
    } else {
      alert("Please agree to the terms and conditions to continue.");
    }
  };

  return (
    <div style={containerStyle}>
      <MainHeading prehighlight="App user terms and conditions" />
      <ParaContain content="Lorem ipsum dolor sit amet consectetur. Posuere malesuada pretium justo ullamcorper tempor. Eu risus tellus interdum mauris" />

      <section>
        <SubHeading heading="Eligibility" />
        <ParaContain content="To use our services, you must be at least 18 years of age and legally authorized to work in the country where you are applying for jobs. By using our services, you represent and warrant that you meet these eligibility requirements." />
      </section>
      <section>
        <SubHeading heading="Job Listings" />
        <ParaContain content="Lorem ipsum dolor sit amet consectetur. Suspendisse in malesuada ornare etiam. Mi ac iaculis lacus a tempor phasellus integer pharetra. Iis lacus a tempor phasellus integer pharetra." />
      </section>
      <section>
        <SubHeading heading="Job Applications" />
        <ParaContain content="To use our services, you must be at least 18 years of age and legally authorized to work in the country where you are applying for jobs. By using our services, you represent and warrant that you meet these eligibility requirements." />
      </section>
      <section>
        <SubHeading heading="User Content" />
        <ParaContain content="To use our services, you must be at least 18 years of age and legally authorized to work in the country where you are applying for jobs. By using our services, you represent and warrant that you meet these eligibility requirements." />
      </section>
      <form onSubmit={handleFormSubmit}>
      <div>
      <input
        className='agreed'
        type="radio"
        name="condition"
        value="agreed"
        checked={isAgreed}
        onChange={handleChange}
      />
      <label
        className={isAgreed ? 'agreed-label' : 'error-label'}
        htmlFor="condition"
      >
        Agree to all terms and conditions
      </label>
    </div>
        <div className='agreeSubmit'>
          <SubmitButton content="Agree and continue" handler={handleFormSubmit}  />
        </div>
      </form>
    </div>
  );
};

export default AppTermsAndConditions;
