import React, { useState, useEffect } from 'react';
import './Elra.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../scrollUtils'; // Import the utility function
import Footer from '../../../../Components/Portfolio/Footer/Footer';
import Navbar from '../../../../Components/Portfolio/Navbar/Navbar';
import video from '../../../../Resources/Videos/el.mp4'

import html from '../../../../Resources/Images/HTML.png'
import css from '../../../../Resources/Images/CSS.png'
import js from '../../../../Resources/Images/JavaScript.png'
import react from '../../../../Resources/Images/React-01.png'
import blender from '../../../../Resources/Images/spline-logos-idx0zotd8Y.png'
import { Helmet } from 'react-helmet-async';
import c1 from '../../../../Resources/Images/c8.webp'
import GoogleAnalytics from '../../../../GoogleAnalytics/GoogleAnalytics';

function Elra() {
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
                setButtonClicked(false);
                navigate('/Contact');
            } else if (info === 'Home') {
                navigate('/Portfolio');
            }
        }, 1600); // 1.6 seconds (1600 milliseconds) delay
    };

    useEffect(() => {
        scrollToTop(); // Call scrollToTop when the component mounts
    }, []);


    return (
        <div>
            <Helmet>
            <title>Elra</title>
                <meta name='description' content="Niko Gorjan developed a multilingual website for Elra Electroinstalation."></meta>
                <link rel='canonical' href='/Projects/Elra'></link>
            </Helmet>
                        <div className='contact-bg'></div>
        <GoogleAnalytics/>
        
        <div className='Tree-main'>
            <Navbar onButtonClick={handleButtonClick} />

            <div className='fade-overflow2'>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>

            </div>

            <div className='project-layout'>
                <div className='project-left'>
                    <div className='project-video'>
                    <div className='project-img-wrapper'>
                        <img className='the-video ' src={c1} />
                        </div>
                    </div>
                    <div className='project-paragraphs'>
                        <div className='project-paragraphs-wrapper'>
                            <h1 className='projects-name'>Elektro Elra</h1>
                            <p className='projects-paragraph'>I had the privilege of crafting a dynamic website for a Slovenian company specializing in electrical installations, with a primary focus on the Austrian market. This project encompassed several noteworthy features, including multi-language support to reach a diverse audience effectively. Additionally, I incorporated a captivating 3D animation created using spline techniques. </p>
                        </div>
                    </div>
                </div>

                <div className='project-row'>
                    <div className='project-secondary-row'>
                        <div className='project-cell'>
                            <div className='project-cell-wrapper'>
                                <h1 className='project-cell-header'>Tech Stack</h1>
                                <div className='stack-row'>
                                    <div className='logo-holder'><img src={html} alt='html Development' /></div>
                                    <div className='logo-holder'><img src={css} alt='html Development' /></div>
                                    <div className='logo-holder'><img src={js} alt='html Development' /></div>
                                    <div className='logo-holder'><img src={react} alt='html Development' /></div>
                                    <div className='logo-holder'><img src={blender} alt='html Development' /></div>

                                </div>
                            </div>
                        </div>
                        <div className='project-cell'>
                            <div className='project-cell-wrapper'>
                                <h1 className='project-cell-header'>Progress</h1>
                                <div className='progress-bar'>
                                    <div className='progress3'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='project-secondary-row'>
                        <div className='project-cell button-cell' onClick={() => window.open('http://elektro-elra.si/', '_blank')}>
                            <h1 className='project-cell-header '>Visit Website</h1>
                        </div>
                        <div className='project-cell work-void3' onClick={() => handleButtonClick('Projects')}>
                            <h1 className='project-cell-header back-button'>Back</h1>

                        </div>

                    </div>

                </div>
            </div>


            <Footer />
        </div>
        </div>
    );
}

export default Elra;