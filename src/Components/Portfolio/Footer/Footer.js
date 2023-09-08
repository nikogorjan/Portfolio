import React from "react";
import './Footer.css';
import Linkedin from '../../../Resources/Images/linkedin.svg'
import Instagram from '../../../Resources/Images/instagram.svg'
import Facebook from '../../../Resources/Images/facebook.svg'
import phone from '../../../Resources/Images/phone.svg'
import globe from '../../../Resources/Images/globe.svg'
import mail from '../../../Resources/Images/mail.svg'


function Footer() {
    function openLinkedInProfile() {
        window.open('https://www.linkedin.com/in/niko-gorjan-582433276/', '_blank');
    }

    function openInstaProfile() {
        window.open('https://www.instagram.com/nikoog23/', '_blank');
    }

    function openFbProfile() {
        window.open('https://www.facebook.com/niko.gorjan/', '_blank');
    }


    return (
        <div className='footer-main'>
            <div className="final-position">
                <div className="contact-section">
                    <p className="contact-header">Contact</p>
                    <div className="contact-info">
                        <a href="mailto:niko.gorjan@gmail.com">
                            <div className='logo-holder social-holder contact-holder'><img src={mail} alt='html Development' /></div>
                            <span className="my-email">niko.gorjan@gmail.com</span>
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href="tel:+38631590850">
                            <div className='logo-holder social-holder contact-holder'><img src={phone} alt='html Development' /></div>
                            <span className="my-email">+386 31 590 850</span>
                        </a>
                    </div>
                    <div className="contact-info">
                    <div className='logo-holder social-holder contact-holder'>
    <a href='https://www.google.com/maps?q=Slovenia' target='_blank' rel='noopener noreferrer'>
        <img src={globe} alt='html Development' />
    </a>
</div>
<span className="my-email">Slovenia</span>
                    </div>
                </div>

                <div className="socials-section">
                    <p className="contact-header">Socials</p>
                    <div className="sicials-row">
                        <div className='logo-holder social-holder' onClick={openLinkedInProfile}><img src={Linkedin} alt='html Development' /></div>
                        <div className='logo-holder social-holder' onClick={openInstaProfile}><img src={Instagram} alt='html Development' /></div>
                        <div className='logo-holder social-holder' onClick={openFbProfile}><img src={Facebook} alt='html Development' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;