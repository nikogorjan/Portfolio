import React from 'react';
import './PortfolioHero.css';
import Work1 from '../../../Resources/Videos/work1.mp4';
import Work2 from '../../../Resources/Videos/work2.mp4';
import Work3 from '../../../Resources/Videos/work3.mp4';

function PortfolioHero() {


  return (
    <div className='PortfolioHero-main'>
      <div className='portfolio-left'>
        <video
          className='animated-div'
          autoPlay
          loop
          muted
          src={Work1}
        ></video>

          <video
            className='animated-div'
            autoPlay
            loop
            muted
            src={Work2}
          ></video>
          <video
            className='animated-div'
            autoPlay
            loop
            muted
            src={Work3}
          ></video>

        
      </div>
      <div className='portfolio-right'>
        <div className='right-portfolio-wrapper'>
          <h1 className='my-work'>My work</h1>
          <p className='my-paragraph'>I'm deeply passionate about the art of crafting animations that breathe life into websites, transforming them into dynamic and captivating digital experiences.</p>
          <button className='btn-5 margin-btn'>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioHero;