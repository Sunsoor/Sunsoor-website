import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MainHeading, ParaContain } from '../components/subcomponents/Elements';

const PrivacyPage = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 480px)' });
  const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' });

  const containerStyle = {
    padding: isSmallScreen ? '2em 3em' : isMediumScreen ? '3em 5em' : '4em 8em'
  };
    return ( 
        <div style={containerStyle}>
    <MainHeading prehighlight = "Privacy Policy" />
        <ParaContain content = "Lorem ipsum dolor sit amet consectetur. Ac a tellus metus vulputate aliquam. Non mauris nunc egestas sed condimentum at vel dignissim. Ac fermentum aliquet hac amet. Tellus eu fames pretium tristique eget massa. Donec praesent in hac arcu tincidunt amet malesuada arcu. Semper tincidunt imperdiet condimentum at augue elit. Metus elementum semitis accumsan praesent diam orci enim porta sed. Ornare quam massa ut amet aliquam eu lacus accumsan. Quam sed nulla adipisicing vel vulputate. Erat et odio ornare aliqua leo est adipisci vel."/>
        <ParaContain content = "Ac velit in etiam morbi pharetra. Lobortis dolor pharetra nibh euismod magna tempor elit fermentum sapien. Elementum in nulla elit eu massa adipiscing vitae nisl velit. Nisl consectetur diam viverra ac cras libero eget. Mi eros lorem cras hac nibh nulla placerat at. Imperdiet eget etiam massa integer. Sed dictum odio etiam non mollis quam. Justo adipiscing dictum adipiscing vitae fringilla consequat non. Vel lacinia ut netus est in volutpat dictum. Ultrices feugiat sed convallis a pellentesque libero porttitor mauris nisi. Nulla quam praesent duis blandit nisi faucibus. Quisque etiam nibh venenatis in. "/>
        <ParaContain content= "Malesuada adipiscing viverra imperdiet tellus turpis adipiscing senectus lobortis blandit. Morbi amet vitae arcu scelerisque neque nulla. Amet dignissim hac eget tristique ullamcorper sit tortor diam pulvinar. Pulvinar amet eget vel mattis. Nibh turpis quam neque aliquet vulputate non vulputate porta. Eget tristique convallis sollicitudin elementum quis venenatis amet eu. Montes quam aliquet posuere morbi. Massa sed nulla viverra massa senectus volutpat justo faucibus aliquam. Nec nullam diam tincidunt vulputate a aenean. Arcu nulla ornare etiam facilisis quam tincidunt interdum erat. Viverra risus diam aenean massa libero semper. Egestas erat mus neque nam lorem ultricies. Adipiscing cursus morbi euismod congue duis. Odio amet vestibulum hac pretium faucibus est ac. Elit diam donec commodo pretium diam faucibus semper in tristique. Risus a quis accumsan nulla libero at arcu. Duis nec auctor ut et non justo eget dolor." />
</div>
    );
};

export default PrivacyPage;