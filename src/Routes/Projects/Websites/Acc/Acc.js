import React, {  useState,useEffect } from 'react';
import './Acc.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../scrollUtils'; // Import the utility function
import Footer from '../../../../Components/Portfolio/Footer/Footer';
import Navbar from '../../../../Components/Portfolio/Navbar/Navbar';
import video from '../../../../Resources/Videos/acc3.mp4'

import html from '../../../../Resources/Images/Flutter-02.png'
import css from '../../../../Resources/Images/Firebase-02.png'
import js from '../../../../Resources/Images/JavaScript.png'
import react from '../../../../Resources/Images/React-01.png'
import blender from '../../../../Resources/Images/spline-logos-idx0zotd8Y.png'
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../../../../GoogleAnalytics/GoogleAnalytics';

function Acc() {
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
            }else if (info === 'Home') {
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
            <title>Accounting App</title>
                <meta name='description' content="Niko Gorjan earned a diploma for crafting a multiplatform accounting app."></meta>
                <link rel='canonical' href='/Projects/AccountingApp'></link>
            </Helmet>
                       <div className='contact-bg'></div>

        <GoogleAnalytics/>
        <div className='Tree-main'>
           <Navbar onButtonClick={handleButtonClick}/>

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
                            <h1 className='projects-name'>Accounting App</h1>
                            <p className='projects-paragraph'>I earned a Bachelor's degree for developing a versatile multiplatform accounting app using Flutter and Firebase. The app enables users to perform journal entries, generate invoices with automatic updates to accounts, track transactions, manage inventory, input employee hours, and generate financial statements, streamlining comprehensive financial management. </p>
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
                                    

                                </div>
                            </div>
                        </div>
                        <div className='project-cell'>
                            <div className='project-cell-wrapper'>
                                <h1 className='project-cell-header'>Progress</h1>
                                <div className='progress-bar'>
                                    <div className='progress2'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='project-secondary-row'>
                        <div className='project-cell button-cell' onClick={() => handleButtonClick('Home')}>
                            <h1 className='project-cell-header '>Home</h1>
                        </div>
                        <div className='project-cell work-void3' onClick={() => handleButtonClick('Projects')}>
                            <h1 className='project-cell-header back-button'>Back</h1>

                        </div>

                    </div>

                </div>
            </div>

           <Footer/>
        </div>
        </div>
    );
}

export default Acc;