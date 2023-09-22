import React, { useEffect, useState } from 'react';
import './Intro.css';

function Intro() {
  const [shadowPlanetWidth, setShadowPlanetWidth] = useState('60%');
  const [shadowPlanetHeight, setShadowPlanetHeight] = useState('');

  useEffect(() => {
    // Function to calculate and set the height based on the current width
    const calculateHeight = () => {
      const parentWidth = document.querySelector('.portfolio-right').offsetWidth;
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
    <div className='introHero-main'>
      <div className='intro-hidden'>
        <div className='right-wrapper'>
          <div
            className='shadow-planet'
            style={{ width: shadowPlanetWidth, height: shadowPlanetHeight }}
          >
            <div className='planet'></div>
          </div>
        </div>
      </div>
      <div className='intro-left'>
        <div className='left-wrapper'>
          <h1 className='intro-header1'>Niko Gorjan</h1>
          <h2 className='intro-header2'>Full-Stack Developer</h2>
          <div className='buttons-row'>
            <button className='btn-5'>CV</button>
            <button className='btn-5 color-yello'>Contact</button>

          </div>

        </div>
      </div>
      <div className='intro-right'>
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

export default Intro;