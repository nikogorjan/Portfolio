import React, { useState, useEffect } from 'react';
import './Navbar.css';
import demin from '../../../Resources/Images/deminobg.png';

function Navbar({ onButtonClick }) {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleButtonClick = (info) => {
        // Call the function passed from the parent component with the info
        onButtonClick(info);
    };


    

    return (
        <div className={`navbar-main ${scrolling ? 'scrolled' : ''} ${menuOpen ? 'menu-opened' : ''}`}>
            <div className='demi-logo-holder' onClick={() => handleButtonClick('Home')}>  <img className='the-img' src={demin} alt='Demi Logo' />
</div>


            <div className='navbar-links'>
                <p onClick={() => handleButtonClick('Home')}>Home</p>
                <p onClick={() => handleButtonClick('Projects')}>Projects</p>

                
                <button className='btn-5  yello-margin' onClick={() => handleButtonClick('Contact')}>Contact</button>

            </div>
            <div className='navbar-menu' onClick={toggleMenu}>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>

            <div className={`open-menu ${menuOpen ? "openmenu" : ""}`} >
                <p className='navbar-link' onClick={() => handleButtonClick('Home')}>Home</p>

                <p className='navbar-link' onClick={() => handleButtonClick('Projects')}>Projects</p>

                
                <button className='btn-5 ' onClick={() => handleButtonClick('Contact')}>Contact</button>
            </div>

        </div>
    );
}

export default Navbar;