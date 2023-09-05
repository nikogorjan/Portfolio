import React from 'react';
import './Accounting.css';
import AccountingVideo from '../../../Resources/Videos/bgc.mov';
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
                <h1 className='business-header'>Impassioned and Business-Minded</h1>
                <p className='business-paragraph'>In pursuit of my academic endeavors, I delved deep into the realm of business and technology. My final college project, which culminated in the award of my diploma, encapsulated my business-minded approach. I embarked on an extensive research journey into accounting and bookkeeping, aiming to bridge the gap between traditional financial practices and the digital age. Leveraging the versatile Flutter framework, I developed an innovative accounting application that seamlessly operates within web browsers and functions as a mobile app. This project not only showcased my technical prowess but also highlighted my commitment to marrying business acumen with cutting-edge technology.</p>
                <button className='btn-5 color-yello'>Read more</button>
            </div>
        </div>
    );
}

export default Accounting;