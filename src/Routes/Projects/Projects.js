import React, { useState, useEffect } from 'react';
import './Projects.css';
import Navbar from '../../Components/Portfolio/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Solar from '../../New/Solar/Solar';
import Footer from '../../Components/Portfolio/Footer/Footer';
import { scrollToTop } from './scrollUtils'; // Import the utility function
import work1 from '../../Resources/Videos/work1.mp4'
import work2 from '../../Resources/Videos/work2.mp4'
import work3 from '../../Resources/Videos/work3.mp4'
import work4 from '../../Resources/Videos/accountingEdited.mov'
import { Helmet } from 'react-helmet-async';


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
                <video autoPlay muted loop src={videoSrc} />
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
                    <ProjectCell title='Van Pelts Tree Services and Lawn Care' videoSrc={work1} onClick={() => handleButtonClick('Tree')}/>
                    <ProjectCell title='Center Gibanja' videoSrc={work2} onClick={() => handleButtonClick('Cg')}/>
                </div>
                <div className='secondary-row'>
                    <ProjectCell title='Elektro-Elra' videoSrc={work3} onClick={() => handleButtonClick('Elra')}/>
                    <ProjectCell title='Accounting App' videoSrc={work4} onClick={() => handleButtonClick('Acc')}/>

                </div>
            </div>
            {/*<Solar/>*/}
            <div className='contact-bg'></div>

            <Footer />
        </div>
    );
}

export default Projects;