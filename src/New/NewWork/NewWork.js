import React, { useEffect } from 'react';
import './NewWork.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Work1 from '../../Resources/Videos/work1.mp4'
import Work2 from '../../Resources/Videos/work2.mp4'
import Work3 from '../../Resources/Videos/work3.mp4'

function NewWork() {

    return (
        <div className='NewWork-main'>
            <div className='first-trigger-row'>
                <div className='work-void1'></div>
                <div className='work-trigger'>
                    <video
                        className='video-div1'
                        autoPlay
                        loop
                        muted
                        src={Work1}
                    ></video>
                    <video
                        className='video-div2'
                        autoPlay
                        loop
                        muted
                        src={Work2}
                    ></video>
                </div>
                <div className='work-void2'></div>
            </div>
            <div className='second-trigger-row'>
                <div className='work-void3'>
                    <p className='void3-text'>Read more</p>
                </div>
                <div className='work-paragraph'>
                    <div className='work-paragraph-container'>
                        <h1 className='my-work-header'>My work</h1>
                        <p className='my-work-paragraph'>I'm deeply passionate about the art of crafting animations that breathe life into websites, transforming them into dynamic and captivating digital experiences.</p>

                    </div>
                </div>
                <div className='work-void4'></div>

            </div>
        </div>
    );
}

export default NewWork;