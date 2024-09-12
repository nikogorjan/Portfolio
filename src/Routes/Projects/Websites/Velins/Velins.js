import React, {  useState,useEffect } from 'react';
import './Velins.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../scrollUtils'; // Import the utility function
import Footer from '../../../../Components/Portfolio/Footer/Footer';
import Navbar from '../../../../Components/Portfolio/Navbar/Navbar';
import video from '../../../../Resources/Videos/acc3.mp4'
import { Helmet } from 'react-helmet-async';

import html from '../../../../Resources/Images/React-01.png'
import node from '../../../../Resources/Images/Node-JS-01.png'
import wp from '../../../../Resources/Images/wp.png'

import c1 from '../../../../Resources/Images/c4.webp'
import GoogleAnalytics from '../../../../GoogleAnalytics/GoogleAnalytics';

const Velins = () => {
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
            <title>Velins Shop </title>
                <meta name='description' content="Velins Shop is an eCommerce platform specializing in collagen supplements designed to promote health."></meta>
                <link rel='canonical' href='/Projects/VelinsShop'></link>
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
                        <div className='project-img-wrapper'>
                        <img className='the-video ' src={c1} />
                        </div>
                        
                            
                    </div>
                    <div className='project-paragraphs'>
                        <div className='project-paragraphs-wrapper'>
                            <h1 className='projects-name'>Velins Shop</h1>
                            <p className='projects-paragraph'>Velins Shop is an eCommerce platform specializing in collagen supplements designed to promote health, beauty, and overall wellness. The website offers a variety of high-quality collagen products aimed at improving skin elasticity, joint health, and vitality. With a user-friendly shopping experience, Velins Shop allows customers to easily browse, select, and purchase supplements tailored to their specific needs. Backed by a commitment to quality and customer satisfaction, Velins Shop is your go-to destination for premium collagen supplements that support a healthier, more youthful lifestyle.</p>
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
                                    <div className='logo-holder'><img src={node} alt='html Development' /></div>
                                    <div className='logo-holder'><img src={wp} alt='html Development' /></div>


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
                        <div className='project-cell button-cell' onClick={() => window.open('https://velins.shop/', '_blank')}>
                            <h1 className='project-cell-header '>Visit Website</h1>
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
  )
}

export default Velins
