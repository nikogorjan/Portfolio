import React, { useState, useEffect } from 'react';
import './Projects.css';
import Navbar from '../../Components/Portfolio/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Solar from '../../New/Solar/Solar';
import Footer from '../../Components/Portfolio/Footer/Footer';
import { scrollToTop } from './scrollUtils'; // Import the utility function
import { Helmet } from 'react-helmet-async';

import c1 from '../../Resources/Images/c1.webp'
import c2 from '../../Resources/Images/c2.webp'
import c3 from '../../Resources/Images/c3.webp'
import c4 from '../../Resources/Images/c4.webp'
import c5 from '../../Resources/Images/c5.webp'
import c6 from '../../Resources/Images/c6.webp'
import c7 from '../../Resources/Images/c7.webp'
import c8 from '../../Resources/Images/c8.webp'
import c9 from '../../Resources/Images/c9.webp'
import c10 from '../../Resources/Images/10.webp'
import GoogleAnalytics from '../../GoogleAnalytics/GoogleAnalytics';


function ProjectCell({ videoSrc, title, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`projects-r-cell ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick} // Add the onClick event here

        >
            {isHovered ? (
                <img autoPlay muted loop src={videoSrc} className='cell-image'/>
            ) : (
                <h3 className='video-tittle'>{title}</h3>
            )}
        </div>
    );
}


function Projects() {
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
                setButtonClicked(false);
                navigate('/Projects');
            } else if (info === 'Contact') {
                navigate('/Contact');
            } else if (info === 'Home') {
                navigate('/Portfolio');
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

    return (
        <div className='projects-main'>
            <Helmet>
            <title>Projects</title>
                <meta name='description' content="Explore Niko Gorjan's web & e-commerce projects, 3D modeling, design, and development work."></meta>
                <link rel='canonical' href='/Projects'></link>
            </Helmet>
            <GoogleAnalytics/>
            <Navbar onButtonClick={handleButtonClick} />

            <div className='fade-overflow2'>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>

            </div>

            <div className='projects-layout'>
                <div className='projects-left'>
                    <div className='info-wrapper'>
                        <h1 className='my-name-header'>My Work</h1>
                        <h2 className='my-name-header2'>A Showcase of My Creative Work</h2>

                    </div>
                </div>
                <div className='projects-right'><Solar /></div>
            </div>
            <div className='projects-row'>
                <div className='secondary-row'>
                    <ProjectCell title='TM Lifestyle Coaching' videoSrc={c1} onClick={() => handleButtonClick('tm')}/>
                    <ProjectCell title='Horion' videoSrc={c3} onClick={() => handleButtonClick('horion')}/>
                </div>
                <div className='secondary-row'>
                    <ProjectCell title='Hausbetreung' videoSrc={c2} onClick={() => handleButtonClick('haus')}/>
                    <ProjectCell title='Velins Shop' videoSrc={c4} onClick={() => handleButtonClick('velins')}/>

                </div>
            </div>
            <div className='projects-row'>
                <div className='secondary-row'>
                    <ProjectCell title='Van Pelts Tree Services and Lawn Care' videoSrc={c6} onClick={() => handleButtonClick('Tree')}/>
                    <ProjectCell title='Media M' videoSrc={c5} onClick={() => handleButtonClick('mediam')}/>
                </div>
                <div className='secondary-row'>
                    <ProjectCell title='Center gibanja' videoSrc={c7} onClick={() => handleButtonClick('Cg')}/>
                    <ProjectCell title='Elektro-Elra' videoSrc={c8} onClick={() => handleButtonClick('Elra')}/>

                </div>
            </div>
            <div className='projects-row smallerrow'>
                <div className='secondary-row'>
                    <ProjectCell title='Jasha Brewing' videoSrc={c9} onClick={() => handleButtonClick('jasha')}/>
                    <ProjectCell title='Accounting App' videoSrc={c10} onClick={() => handleButtonClick('Acc')}/>
                </div>
                
            </div>
            {/*<Solar/>*/}
            <div className='contact-bg'></div>

            <Footer />
        </div>
    );
}

export default Projects;