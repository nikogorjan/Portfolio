import React, { useEffect, useState } from 'react';
import './NewHero.css';

function NewHero() {
    const [shadowPlanetWidth, setShadowPlanetWidth] = useState('60%');
    const [shadowPlanetHeight, setShadowPlanetHeight] = useState('');

    useEffect(() => {
        // Function to calculate and set the height based on the current width
        const calculateHeight = () => {
            const parentWidth = document.querySelector('.my-info-container').offsetWidth;
            const calculatedHeight = (parentWidth * 0.6).toFixed(2) + 'px';
            setShadowPlanetHeight(calculatedHeight);
            setShadowPlanetWidth('60%');
        };

        // Initial calculation
        calculateHeight();

        // Add a resize event listener to recalculate when the screen size changes
        window.addEventListener('resize', calculateHeight);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);


    return (
        <div className='NewHero-main'>
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

                <h1 className='my-name-header'>Niko Gorjan</h1>
                <h2 className='my-name-header2'>Full-Stack Developer</h2>
                <div className='buttons-row'>
                    <button className='btn-5'>CV</button>
                    <button className='btn-5 color-yello'>Contact</button>

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