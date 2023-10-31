import React, { useState, useEffect } from 'react';
import './Contact.css';
import Navbar from '../../Components/Portfolio/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { scrollToTop } from '../Projects/scrollUtils'; // Import the utility function
import Footer from '../../Components/Portfolio/Footer/Footer';
import ContactForm from '../../Components/Portfolio/Contact/Contact';

import Linkedin from '../../Resources/Images/linkedin.svg'
import Instagram from '../../Resources/Images/instagram.svg'
import Facebook from '../../Resources/Images/facebook.svg'
import phone from '../../Resources/Images/phone.svg'
import globe from '../../Resources/Images/globe.svg'
import mail from '../../Resources/Images/mail.svg'
import EarthAnimation from './EarthAnimation';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

function Contact() {
    const [clickedInfo, setClickedInfo] = useState('');
    const navigate = useNavigate(); // Initialize navigate
    const [buttonClicked, setButtonClicked] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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

    function openLinkedInProfile() {
        window.open('https://www.linkedin.com/in/niko-gorjan-582433276/', '_blank');
    }

    function openInstaProfile() {
        window.open('https://www.instagram.com/nikoog23/', '_blank');
    }

    function openFbProfile() {
        window.open('https://www.facebook.com/niko.gorjan/', '_blank');
    }

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        console.log("before prevent");

        e.preventDefault();
        console.log("sending email");
        // Here, you can perform any additional actions with the `fullName` value, such as sending it to the backend server.
        const templateParams = {
            from_name: fullName,
            from_email: email,
            message: message
        };

        emailjs.send('service_ntc93k8', 'template_xjt4h4j', templateParams, 'qjctlMy68iSCBqueO')
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                window.alert('Email sent successfully:');

                // Reset the form after successful submission if needed
                setFullName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

        // Reset the form after submission if needed
        setFullName("");
    };


    return (
        <div className='Contact-main'>
            <Navbar onButtonClick={handleButtonClick} />
            <Helmet>
            <title>Contact</title>
                <meta name='description' content="Get in touch with Niko Gorjan: Computer scientist, web developer, and 3D artist."></meta>
                <link rel='canonical' href='/Contact'></link>
            </Helmet>

            <div className='fade-overflow2'>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>
                <div className={`portfolio-transition-slider ${buttonClicked ? 'button-clicked' : ''}`}></div>

            </div>

            <div className='the-contact'>
                <div className='contact-first-row'>
                    <div className='first-left'>
                        <div className='info-wrapper-contact'>
                            <h1 className='my-name-header'>Reach Out to the Stars</h1>
                            <h2 className='my-name-header2'>Astronomical Ways to Get in Touch</h2>


                        </div>
                    </div>

                    <div className='first-right'>

                        <EarthAnimation />

                    </div>

                </div>

                <div className='hidden-roww'>
                    <div className="sicials-row hidden-socials">
                        <div className=' social-holder' onClick={openLinkedInProfile}><img src={Linkedin} alt='html Development' /></div>
                        <div className=' social-holder' onClick={openInstaProfile}><img src={Instagram} alt='html Development' /></div>
                        <div className=' social-holder' onClick={openFbProfile}><img src={Facebook} alt='html Development' /></div>
                    </div>

                    <div className="contact-section the-contacts-section">
                            <div className="contact-info">
                                <a href="mailto:niko.gorjan@gmail.com">
                                    <div className='social-holder contact-holder'><img src={mail} alt='html Development' /></div>
                                    <span className="my-email">niko.gorjan@gmail.com</span>
                                </a>
                            </div>
                            <div className="contact-info">
                                <a href="tel:+38631590850">
                                    <div className='social-holder contact-holder'><img src={phone} alt='html Development' /></div>
                                    <span className="my-email">+386 31 590 850</span>
                                </a>
                            </div>
                            <div className="contact-info">
                                <div className=' social-holder contact-holder'>
                                    <a href='https://www.google.com/maps?q=Slovenia' target='_blank' rel='noopener noreferrer'>
                                        <img src={globe} alt='html Development' />
                                    </a>
                                </div>
                                <span className="my-email">Slovenia</span>
                            </div>
                        </div>
                </div>

                {/*<ContactForm />*/}
                <div className='contact-second-row'>
                    <div className='second-secondary'>
                        <div className='second-row-cell'>
                            <div className="sicials-row contacts-socials">
                                <div className=' social-holder' onClick={openLinkedInProfile}><img src={Linkedin} alt='html Development' /></div>
                                <div className=' social-holder' onClick={openInstaProfile}><img src={Instagram} alt='html Development' /></div>
                                <div className=' social-holder' onClick={openFbProfile}><img src={Facebook} alt='html Development' /></div>
                            </div>
                        </div>
                        <div className='second-row-cell'>
                            <div className='input-box-wrapper'><input type='text' id='name' className='input-box-c' placeholder='Name' onChange={handleFullNameChange} /></div>
                        </div>
                    </div>
                    <div className='second-secondary'>
                        <div className='second-row-cell'>
                            <div className='input-box-wrapper'><input type='text' id='email' className='input-box-c' placeholder='Email' onChange={handleEmailChange} /></div>

                        </div>
                        <div className='second-row-cell'></div>
                    </div>


                </div>


                <div className='contact-third-row'>
                    <div className='third-cell-void'></div>
                    <div className='third-cell'>
                        <div className='input-box-wrapper-b'><textarea id='message' className='textarea-box-c' placeholder='Message' onChange={handleMessageChange}></textarea></div>

                    </div>
                    <div className='third-cell-void center-this'>
                        <div className="contact-section section-contact">
                            <div className="contact-info">
                                <a href="mailto:niko.gorjan@gmail.com">
                                    <div className='social-holder contact-holder'><img src={mail} alt='html Development' /></div>
                                    <span className="my-email">niko.gorjan@gmail.com</span>
                                </a>
                            </div>
                            <div className="contact-info">
                                <a href="tel:+38631590850">
                                    <div className='social-holder contact-holder'><img src={phone} alt='html Development' /></div>
                                    <span className="my-email">+386 31 590 850</span>
                                </a>
                            </div>
                            <div className="contact-info">
                                <div className=' social-holder contact-holder'>
                                    <a href='https://www.google.com/maps?q=Slovenia' target='_blank' rel='noopener noreferrer'>
                                        <img src={globe} alt='html Development' />
                                    </a>
                                </div>
                                <span className="my-email">Slovenia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contact-fourth-row'>
                    <div className='fourth-secondary'>
                        <div className='fourth-cell'></div>
                        <div className='fourth-cell the-button-cell' onClick={handleSubmit}>
                            Send
                        </div>
                    </div>
                    <div className='fourth-secondary'>
                        <div className='fourth-cell'></div>
                        <div className='fourth-cell'></div>
                    </div>
                </div>



            </div>

            <div className='contact-bg'></div>

            <Footer />
        </div>
    );
}

export default Contact;