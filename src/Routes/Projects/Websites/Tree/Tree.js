import React, { useState, useEffect } from 'react';
import './Tree.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../scrollUtils'; // Import the utility function
import Footer from '../../../../Components/Portfolio/Footer/Footer';
import Navbar from '../../../../Components/Portfolio/Navbar/Navbar';
import video from '../../../../Resources/Videos/avp.mp4'

import html from '../../../../Resources/Images/HTML.png'
import css from '../../../../Resources/Images/CSS.png'
import js from '../../../../Resources/Images/JavaScript.png'
import react from '../../../../Resources/Images/React-01.png'
import blender from '../../../../Resources/Images/Blender_logo_no_text.svg.png'
import { Helmet } from 'react-helmet-async';

function Tree() {
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
            <title>Van Pelt's Tree & Lawn Care</title>
                <meta name='description' content="Niko Gorjan designed a website for a Dayton, Ohio tree services company."></meta>
                <link rel='canonical' href='/Projects/VanPeltsTrees'></link>
            </Helmet>
                        <div className='contact-bg'></div>

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
                        <video autoPlay loop muted playsInline className='the-video'>
                            <source src={video} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div className='project-paragraphs'>
                        <div className='project-paragraphs-wrapper'>
                            <h1 className='projects-name'>Van Pelts Tree Services and Lawn Care</h1>
                            <p className='projects-paragraph'>I had the privilege of working on a comprehensive website project for a tree services company, where I combined my skills in design, development, and animation to create a visually engaging online presence.</p>
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
                                    <div className='progress'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='project-secondary-row'>
                        <div className='project-cell button-cell' onClick={() => window.open('https://vanpeltstreeservice.com/', '_blank')}>
                            <div className='project-cell-wrapper'>
                                <h1 className='project-cell-header '>Visit Website</h1>
                            </div>
                        </div>
                        <div className='project-cell work-void3' onClick={() => handleButtonClick('Projects')}>
                        <div className='project-cell-wrapper'><h1 className='project-cell-header back-button'>Back</h1></div>

                        </div>

                    </div>

                </div>
            </div>



            <Footer />
        </div>
        </div>

    );
}

export default Tree;