import React from 'react';
import './Accounting.css';
import AccountingVideo from '../../../Resources/Videos/bgc.mov';

import Dream from '../../../Resources/Images/dream.png';

function Accounting() {


    return (
        <div>
        <div className='accounting-main'>
            <div className='accounting-video'>
                <div className='mobile-div'></div>
                <video
                    className='acc-vid'
                    autoPlay
                    loop
                    muted
                    src={AccountingVideo}
                ></video>
            </div>

            
        </div>
            <div className='about-business'>
                <h1 className='business-header'>Business-Minded</h1>
                <p className='business-paragraph'>For my diploma project, I delved into accounting and bookkeeping, merging traditional finance with digital tech. Using Flutter, I built a versatile accounting app for web and mobile, blending technical skills with a business mindset.</p>
                
            </div>

            <div className="dream">
                <img src={Dream} alt='dream Development' className="dream-img"/>
            </div>
        </div>
    );
}

export default Accounting;