import React, { useEffect, useRef } from 'react';
import './WorkAnimation.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



import Astronaut from '../Astronaut/Astronaut';
import c1 from '../../Resources/Images/c1.webp'
import c2 from '../../Resources/Images/c2.webp'
import c3 from '../../Resources/Images/c3.webp'
import c4 from '../../Resources/Images/c4.webp'
import c5 from '../../Resources/Images/c5.webp'
import c6 from '../../Resources/Images/c6.webp'
import c7 from '../../Resources/Images/c7.webp'
import Work4 from '../../Resources/Videos/Editedd.mp4'
import Work5 from '../../Resources/Videos/kolagen.mp4'

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
                    scrub: 1, // Slows down the scrub effect
                    start: 'top top',
                    end: () => "+=" + slider.current.offsetWidth/1, // Extends the end point
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
                once: true
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

                <div className="panel red " onClick={() => handleButtonClick('tm')}>
                        <img
                            className='slider-img'
                            alt='c1'
                            src={c1}
                        ></img>
                    </div>
                    <div className="panel red " onClick={() => handleButtonClick('horion')}>
                        <img
                            className='slider-img'
                            alt='c3'

                            src={c3}
                        ></img>
                    </div>
                    <div className="panel purple" onClick={() => window.open('https://www.youtube.com/watch?v=drfBL2YxySc', '_blank')}><video
                        className='video-work'
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={Work4}
                    ></video></div>
                    <div className="panel red " onClick={() => handleButtonClick('haus')}>
                        <img
                            className='slider-img'
                            alt='c2'

                            src={c2}
                        ></img>
                    </div>
                    <div className="panel red " onClick={() => handleButtonClick('velins')}>
                        <img
                            className='slider-img'
                            alt='c4'

                            src={c4}
                        ></img>
                    </div>
                    <div className="panel purple notsowide" onClick={() => window.open('https://www.youtube.com/watch?v=8Dj9S6yHseI', '_blank')}><video
                        className='video-work video16'
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={Work5}
                    ></video></div>
                    <div className="panel red " onClick={() => handleButtonClick('Tree')}>
                        <img
                            className='slider-img'
                            alt='c6'

                            src={c6}
                        ></img>
                    </div>
                    <div className="panel red " onClick={() => handleButtonClick('mediam')}>
                        <img
                            className='slider-img'
                            alt='c5'

                            src={c5}
                        ></img>
                    </div>
                    <div className="panel red " onClick={() => handleButtonClick('Cg')}>
                        <img
                            className='slider-img'
                            alt='c7'

                            src={c7}
                        ></img>
                    </div>
                    
                    
                    <div className="fixed-bottom-div">
                        <div className='trigger-row-wrapper'>
                            <div className='second-trigger-row'>
                                <div className='work-void3' onClick={() => handleButtonClick('Projects')}>
                                    <p className='void3-text'>All projects</p>
                                </div>
                                <div className='work-paragraph'>
                                    <div className='work-paragraph-container' ref={workParagraph} style={{ transform: 'translateX(100%)', opacity: 0 }}>
                                        <h1 className='my-work-header'>My work</h1>
                                        <p className='my-work-paragraph'>I'm deeply passionate about the art of crafting animations that breathe life into websites, transforming them into dynamic and captivating digital experiences.</p>

                                    </div>
                                </div>
                                <div className='work-void4'><Astronaut className='scale-astronaut' /></div>
                            </div>

                            <div className='hidden-row'>
                                <div className='work-void3 display-it' onClick={() => handleButtonClick('Projects')}>
                                    <p className='void3-text'>All projects</p>
                                </div>
                                <div className='work-void4 display-it'><Astronaut className='scale-astronaut' /></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default WorkAnimation;