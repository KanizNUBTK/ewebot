import React from 'react';
import ChooseUs from '../BottomPartExperience/ChooseUs';
import ExperienceDownPart from '../ExperienceDownPart/ExperienceDownPart';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Experience from './Experience/Experience';
import Feature from './Feature/Feature';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Experience />
            <ExperienceDownPart />
            <Services />

            <ChooseUs />
            <Feature />
        </div>
    );
};

export default Home;