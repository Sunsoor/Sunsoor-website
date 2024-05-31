import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MainHeading, ParaContain } from '../components/subcomponents/Elements';
import { useTranslation } from 'react-i18next';

const PrivacyPage = () => {
  const {t} = useTranslation();
    const isSmallScreen = useMediaQuery({ query: '(max-width: 480px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const containerStyle = {
    padding: isSmallScreen ? '2em 3em' : isMediumScreen ? '3em 5em' : '4em 8em'
  };
    return ( 
        <div style={containerStyle}>
    <MainHeading prehighlight = {t("privacyPolicy.title")} />
        <ParaContain content = {t("privacyPolicy.content01")}/>
        <ParaContain content = {t("privacyPolicy.content02")}/>
        <ParaContain content= {t("privacyPolicy.content03")} />
</div>
    );
};

export default PrivacyPage;