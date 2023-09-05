import React from "react";
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-main'>
            <div className="contact-section">
                <p className="contact-header">Contact</p>
                <ul className="contact-list">
                    <li>
                        <FaEnvelope />
                        <a href="mailto:your.email@example.com" className="contact-link">your.email@example.com</a>
                    </li>
                    <li>
                        <FaPhoneAlt />
                        <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
                    </li>
                    <li>
                        <FaGlobe />
                        Slovenia
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;