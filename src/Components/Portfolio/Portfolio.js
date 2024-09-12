import React, { useEffect, useState } from 'react';
import './Portfolio.css';

import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import NewHero from '../../New/Hero/NewHero';
import NewSkills from '../../New/Skills/NewSkills';
import NewWork from '../../New/NewWork/NewWork';
import WorkAnimation from '../../New/NewWork/WorkAnimation';
import NewAccounting from '../../New/NewAccounting/NewAccounting';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../Routes/Projects/scrollUtils'; // Import the utility function
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../../GoogleAnalytics/GoogleAnalytics';

function Portfolio() {
    const [hasRefreshed, setHasRefreshed] = useState(false);
    const [clickedInfo, setClickedInfo] = useState('');
    const navigate = useNavigate(); // Initialize navigate
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = (info) => {
        // Handle the button click and update the state
        setClickedInfo(info);
        setButtonClicked(true);

        // Wait for 1.6 seconds and then navigate based on which button was clicked
        setTimeout(() => {
            if (info === 'Projects') {
                navigate('/Projects');
            } else if (info === 'Contact') {
                navigate('/Contact');
            }else if (info === 'Home') {
                setButtonClicked(false);

                navigate('/Portfolio');
            }
            else if (info === 'tm') {
                navigate('/Projects/TMLifestyleCoaching');
            }else if (info === 'Tree') {
                navigate('/Projects/VanPeltsTrees');
            }else if (info === 'Cg') {
                navigate('/Projects/CenterGibanja');
            }else if (info === 'Elra') {
                navigate('/Projects/ElektroElra');
            }else if (info === 'Acc') {
                navigate('/Projects/AccountingApp');
            }else if (info === 'tm') {
                navigate('/Projects/TMLifestyleCoaching');
            }else if (info === 'horion') {
                navigate('/Projects/horion');
            }else if (info === 'haus') {
                navigate('/Projects/Hausbetreung');
            }else if (info === 'velins') {
                navigate('/Projects/VelinsShop');
            }else if (info === 'mediam') {
                navigate('/Projects/MediaM');
            }else if (info === 'jasha') {
                navigate('/Projects/JashaBrewing');
            }
        }, 1600); // 1.6 seconds (1600 milliseconds) delay
    };

    useEffect(() => {
        scrollToTop(); // Call scrollToTop when the component mounts
      }, []);

    useEffect(() => {
        const hasPreviouslyRefreshed = localStorage.getItem('hasRefreshed');

        if (!hasPreviouslyRefreshed) {
            // Perform the refresh operation here
            window.location.reload();

            // Set the local storage flag to prevent further refreshing
            localStorage.setItem('hasRefreshed', 'true');
        }

        // Update the state to reflect that a refresh has happened
        setHasRefreshed(true);
    }, []);

    return (
        <div>    
            <Helmet>
            <title>Portfolio</title>
                <meta name='description' content='Niko Gorjan: Computer scientist, web & e-commerce developer, 3D modeling, design, front-end & back-end.'></meta>
                <link rel='canonical' href='/Portfolio'></link>    
            </Helmet>    
            <GoogleAnalytics/>   
             <div className='contact-bg'></div>
        
        <div className='portfolio-main'>
            <Navbar onButtonClick={handleButtonClick}/>
            <NewHero onButtonClick={handleButtonClick} />
            <NewSkills className='my-index'/>
            <WorkAnimation onButtonClick={handleButtonClick} className='my-index'/>
            <NewAccounting onButtonClick={handleButtonClick}/>
            <Footer className='my-index'/>
            {/*<div className='fade-overflow'></div>*/}
            <div className='fade-overflow2'>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>

            </div>
        </div>
        </div>
    );
}

export default Portfolio;