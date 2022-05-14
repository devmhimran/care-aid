import React from 'react';

import Hero from '../Shared/Hero';
import CareAidInfo from '../Shared/CareAidInfo';
import InfoSection from '../Shared/InfoSection';
import OurService from '../Shared/OurService';
import ContactUs from '../Shared/ContactUs';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <CareAidInfo></CareAidInfo>
            <OurService></OurService>
            <InfoSection></InfoSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;