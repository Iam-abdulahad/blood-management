import React from 'react';
import MainAbout from './mainAbout';
import Mission from './Mission';
import TsParticles2 from '../Background/TsParticles2';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <div>
            <TsParticles2></TsParticles2>
            <MainAbout></MainAbout>
            <Mission></Mission>
            <Contact></Contact>
        </div>
    );
};

export default About;