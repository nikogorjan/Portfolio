import React from 'react';
import './Portfolio.css'
import PortfolioHero from './Components/PortfolioHero';
import Intro from './Components/Intro';
import Accounting from './Accounting/Accounting';
import Skills from './Skills/Skills';
import ContactForm from './Contact/Contact';
import Footer from './Footer/Footer';

function Portfolio() {
    

    return (
        <div className='portfolio-main'>
            <Intro/>
            <PortfolioHero/>
            <Accounting/>
            <Skills/>
            <ContactForm/>
            <Footer/>
            <div className='fade-overflow'></div>
        </div>
    );
}

export default Portfolio;