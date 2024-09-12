import React, {  useState,useEffect } from 'react';
import './Jasha.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../scrollUtils'; // Import the utility function
import Footer from '../../../../Components/Portfolio/Footer/Footer';
import Navbar from '../../../../Components/Portfolio/Navbar/Navbar';
import video from '../../../../Resources/Videos/acc3.mp4'
import { Helmet } from 'react-helmet-async';

import html from '../../../../Resources/Images/React-01.png'
import node from '../../../../Resources/Images/Node-JS-01.png'
import wp from '../../../../Resources/Images/wp.png'
import c1 from '../../../../Resources/Images/c9.webp'
import GoogleAnalytics from '../../../../GoogleAnalytics/GoogleAnalytics';

const Jasha = () => {
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
            <title>Jasha Brewing</title>
                <meta name='description' content="Jasha Brewing is an eCommerce platform dedicated to offering unique, designer craft beers."></meta>
                <link rel='canonical' href='/Projects/JashaBrewing'></link>
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
                            <h1 className='projects-name'>Jasha Brewing</h1>
                            <p className='projects-paragraph'>Jasha Brewing is an eCommerce platform dedicated to offering unique, designer craft beers. The website showcases a curated selection of artisanal beers, crafted with passion and creativity. Customers can explore a variety of exclusive brews, each designed to provide a premium beer experience. With an easy-to-navigate interface and secure online shopping, Jasha Brewing allows beer enthusiasts to discover and purchase high-quality, limited-edition beers from the comfort of their home. Perfect for those who appreciate craftsmanship and exceptional taste in every bottle.</p>
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
                        <div className='project-cell button-cell' onClick={() => window.open('https://jashabrewing.com/', '_blank')}>
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

export default Jasha
