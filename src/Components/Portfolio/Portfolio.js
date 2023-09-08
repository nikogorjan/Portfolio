import React from 'react';
import './Portfolio.css'

import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import NewHero from '../../New/Hero/NewHero';
import NewSkills from '../../New/Skills/NewSkills';
import NewWork from '../../New/NewWork/NewWork';

function Portfolio() {
    

    return (
        <div className='portfolio-main'>
           <Navbar/>
            <NewHero/>
            <NewSkills/>
            <NewWork/>
             {/*<Intro/>
            <Skills/>
            <PortfolioHero/>*/}
             {/*<Accounting/>*/}
            
            
            <Footer/>
            <div className='fade-overflow'></div>
        </div>
    );
}

export default Portfolio;