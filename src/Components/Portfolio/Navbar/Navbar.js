import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
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

    

    return (
        <div className={`navbar-main ${scrolling ? 'scrolled' : ''}`}>

            <div className='navbar-links'>
                <p>Home</p>
                <p>Projects</p>

                <p>About Me</p>
                <button className='btn-5  yello-margin'>Contact</button>

            </div>
            <div className='navbar-menu' onClick={toggleMenu}>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>

            <div className={`open-menu ${menuOpen ? "openmenu" : ""}`} >
                <p>Home</p>

                <p >Projects</p>

                <p>About Me</p>
                <button className='btn-5 '>Contact</button>
            </div>

        </div>
    );
}

export default Navbar;