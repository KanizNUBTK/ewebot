import React from 'react';
import FooterTop from '../Footer/FooterTop/FooterTop';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Feature from './Feature/Feature';
import Services from './Services/Services';
import BannerDownPart from './BannerDownPart/BannerDownPart';
import ChooseUs from './ChooseUs/ChooseUs';
import ExperienceDownPart from './ExperienceDownPart/ExperienceDownPart';
import Testimonial from './Testimonial/Testimonial';
import ScreenAnimation from '../../ScreenAnimation/ScreenAnimation';
import FooterBody from '../Footer/FooterBody/FooterBody';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerDownPart />
            <Experience />
            <ExperienceDownPart />
            <Feature />
            <Services />
            <ChooseUs />
            <Testimonial />
            <FooterTop />
            <FooterBody />
            <ScreenAnimation />
        </div>
    );
};

export default Home;