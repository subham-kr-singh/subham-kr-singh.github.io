import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import SkillsNodes from '../components/Sections/SkillsNodes';
import Projects from '../components/Sections/Projects';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <SkillsNodes />
            <Projects />
        </>
    );
};

export default Home;
