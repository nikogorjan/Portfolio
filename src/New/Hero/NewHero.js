import React, { useEffect, useState, useRef } from 'react';
import './NewHero.css';
import Rellax from 'rellax';

function NewHero({ onButtonClick }) {
    const [shadowPlanetWidth, setShadowPlanetWidth] = useState('60%');
    const [shadowPlanetHeight, setShadowPlanetHeight] = useState('');
    const rellaxRef = useRef(null); // Create a ref for the Rellax instance
    const minWidthForParallax = 1000; // Adjust this value as needed
    const rellaxNameHeaderRef = useRef(null); // Create a ref for the Rellax instance of my-name-header
    const rellaxNameHeader2Ref = useRef(null); // Create a ref for the Rellax instance of my-name-header2
    const rellaxButtonsRowRef = useRef(null);




    useEffect(() => {
        // Function to calculate and set the height based on the current width
        const calculateHeight = () => {
            const parentWidth = document.querySelector('.my-info-container').offsetWidth;
            const calculatedHeight = (parentWidth * 0.6).toFixed(2) + 'px';
            setShadowPlanetHeight(calculatedHeight);
            setShadowPlanetWidth('60%');
            //console.log(' width, height: '+shadowPlanetWidth + ' ' + shadowPlanetHeight);
        };

        // Initial calculation
        calculateHeight();

        // Create a new Rellax instance and associate it with the shadow-planet element
        /*if (window.innerWidth >= minWidthForParallax) {
            rellaxRef.current = new Rellax('.shadow-planet', {
                speed: 6, // Adjust the speed as needed for the parallax effect
                center: false,
                round: true,
            });
        }*/

        // Add a resize event listener to recalculate when the screen size changes
        window.addEventListener('resize', calculateHeight);

        // Clean up the event listener and destroy the Rellax instance when the component unmounts
        return () => {
            window.removeEventListener('resize', calculateHeight);
            if (rellaxRef.current) {
                rellaxRef.current.destroy();
            }
        };
    }, []);

    // Determine whether the parallax effect should be active based on the window width
    const isParallaxActive = window.innerWidth >= minWidthForParallax;

    useEffect(() => {
        // Create a new Rellax instance for my-name-header
        rellaxNameHeaderRef.current = new Rellax('.my-name-header', {
            speed: 4, // Adjust the speed as needed for the my-name-header effect
            center: false,
            round: true,
        });

        // Clean up the Rellax instance when the component unmounts
        return () => {
            if (rellaxNameHeaderRef.current) {
                rellaxNameHeaderRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        // Create a new Rellax instance for my-name-header2
        rellaxNameHeader2Ref.current = new Rellax('.my-name-header2', {
            speed: 4, // Adjust the speed as needed for the my-name-header2 effect
            center: false,
            round: true,
        });

        // Clean up the Rellax instance when the component unmounts
        return () => {
            if (rellaxNameHeader2Ref.current) {
                rellaxNameHeader2Ref.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        // Create a new Rellax instance for buttons-row
        rellaxButtonsRowRef.current = new Rellax('.buttons-row', {
            speed: 4, // Adjust the speed as needed for the buttons-row effect
            center: false,
            round: true,
        });

        // Clean up the Rellax instance when the component unmounts
        return () => {
            if (rellaxButtonsRowRef.current) {
                rellaxButtonsRowRef.current.destroy();
            }
        };
    }, []);

    const handleButtonClick = (info) => {
        // Call the function passed from the parent component with the info
        onButtonClick(info);
    };



    return (
        <div className='NewHero-main' >
            <div className='NewHero-intro-hidden'>
                <div className='right-wrapper'>
                    <div
                        className='shadow-planet'
                        style={{ width: shadowPlanetWidth, height: shadowPlanetHeight }}
                    >
                        <div className='planet'></div>
                    </div>
                </div>
            </div>

            <div className='my-info-container'>
                <div className='info-wrapper'>
                    <h1 className='my-name-header'>Niko Gorjan</h1>
                    <h2 className='my-name-header2'>Full-Stack Developer</h2>
                    <div className='buttons-row'>
                        <button className='btn-5' onClick={() => handleButtonClick('Projects')}>Projects</button>
                        <button className='btn-5 color-yello' onClick={() => handleButtonClick('Contact')}>Contact</button>
                    </div>
                </div>
            </div>
            <div className='my-image-container'>
                <div className='right-wrapper'>
                    <div
                        className='shadow-planet'
                        style={{ width: shadowPlanetWidth, height: shadowPlanetHeight }}
                    >
                        <div className='planet'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewHero;