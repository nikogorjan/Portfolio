import React, { useEffect, useRef } from 'react';
import './WorkAnimation.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Work1 from '../../Resources/Videos/work1.mp4'
import Work2 from '../../Resources/Videos/work2.mp4'
import Work3 from '../../Resources/Videos/work3.mp4'
import Astronaut from '../Astronaut/Astronaut';

function WorkAnimation({ onButtonClick }) {
    

    gsap.registerPlugin(ScrollTrigger);


    const component = useRef();
    const slider = useRef();
    const workParagraph = useRef();

    useEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 1,
                    /*snap: 1 / (panels.length - 1),*/
                    start: 'top top',
                    end: () => "+=" + slider.current.offsetWidth/4,
                    /*markers: true,*/

                }
            });

            ScrollTrigger.create({
                trigger: component.current,
                start: 'top 10%', // Adjust this value as needed
                onEnter: () => {
                    gsap.fromTo(workParagraph.current, {
                        x: '0%', // Start from the right (100%)
                        opacity: 0,
                    }, {
                        x: '0%', // Animate to translateX(0%)
                        opacity: 1,
                        duration: 2, // Adjust the duration as needed
                        ease: 'power3.easeOut', // Adjust the easing as needed
                    });
                },
                once:true
            });
        }, component);
        return () => {
            ctx.revert();

            gsap.killTweensOf(".panel"); // Adjust the selector as needed
            gsap.set(".panel", { clearProps: "all" }); // Clear any applied styles
            
            // Kill the ScrollTrigger instance
            

        }
    });

    const handleButtonClick = (info) => {
        // Call the function passed from the parent component with the info
        console.log("clicked");
        onButtonClick(info);
        
    };


    return (
        <div className="App" ref={component}>
            <div className='container-wrapper'>
                <div ref={slider} className="container">

                    <div className="panel red ">
                        <video
                            className='video-work'
                            autoPlay
                            loop
                            muted
                            src={Work1}
                        ></video>
                    </div>
                    <div className="panel orange"><video
                        className='video-work'
                        autoPlay
                        loop
                        muted
                        src={Work2}
                    ></video></div>
                    <div className="panel purple"><video
                        className='video-work'
                        autoPlay
                        loop
                        muted
                        src={Work3}
                    ></video></div>
                    <div className="fixed-bottom-div">
                        <div className='trigger-row-wrapper'>
                            <div className='second-trigger-row'>
                                <div className='work-void3' onClick={() => handleButtonClick('Projects')}>
                                    <p className='void3-text'>Read more</p>
                                </div>
                                <div className='work-paragraph'>
                                    <div className='work-paragraph-container' ref={workParagraph} style={{ transform: 'translateX(100%)', opacity: 0 }}>
                                        <h1 className='my-work-header'>My work</h1>
                                        <p className='my-work-paragraph'>I'm deeply passionate about the art of crafting animations that breathe life into websites, transforming them into dynamic and captivating digital experiences.</p>

                                    </div>
                                </div>
                                <div className='work-void4'><Astronaut className='scale-astronaut'/></div>
                            </div>

                            <div className='hidden-row'>
                                <div className='work-void3 display-it' onClick={() => handleButtonClick('Projects')}>
                                    <p className='void3-text'>Read more</p>
                                </div>
                                <div className='work-void4 display-it'><Astronaut className='scale-astronaut'/></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default WorkAnimation;