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