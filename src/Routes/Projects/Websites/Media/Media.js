import React, {  useState,useEffect } from 'react';
import './Media.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../../scrollUtils'; // Import the utility function
import Footer from '../../../../Components/Portfolio/Footer/Footer';
import Navbar from '../../../../Components/Portfolio/Navbar/Navbar';
import video from '../../../../Resources/Videos/acc3.mp4'
import { Helmet } from 'react-helmet-async';

import html from '../../../../Resources/Images/React-01.png'
import node from '../../../../Resources/Images/Node-JS-01.png'
import wp from '../../../../Resources/Images/wp.png'
import c1 from '../../../../Resources/Images/c5.webp'
import GoogleAnalytics from '../../../../GoogleAnalytics/GoogleAnalytics';

const Tm = () => {
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
            <title>Media M</title>
                <meta name='description' content="Media M is a Polish management company"></meta>
                <link rel='canonical' href='/Projects/TMLifestyleCoaching'></link>
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
                            <h1 className='projects-name'>Media M</h1>
                            <p className='projects-paragraph'>Media M is a Polish management company, and their website, designed with a user-friendly CMS, allows for easy updates of projects and team profiles. The site is built to showcase the company’s expertise and portfolio, providing an intuitive platform for managing and displaying their latest projects and team members. With a sleek design and efficient content management system, Media M's website offers both clients and partners a professional and engaging experience, while the company can effortlessly keep their content fresh and up to date.</p>
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
                        <div className='project-cell button-cell' onClick={() => window.open('https://www.media-m.si/', '_blank')}>
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

export default Tm
