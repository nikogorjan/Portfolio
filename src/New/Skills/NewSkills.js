import React, { useEffect, useRef, useState } from 'react';
import './NewSkills.css';
import front from '../../Resources/Images/design.png';
import back from '../../Resources/Images/backend.png';
import design from '../../Resources/Images/curve.png';
import modeling from '../../Resources/Images/tech.png';
import css from '../../Resources/Images/CSS.png'
import html from '../../Resources/Images/HTML.png'
import js from '../../Resources/Images/JavaScript.png'
import react from '../../Resources/Images/React-01.png'
import flutter from '../../Resources/Images/Flutter-02.png'
import net from '../../Resources/Images/Microsoft-Dotnet.png'
import node from '../../Resources/Images/Node-JS-01.png'
import sql from '../../Resources/Images/MySQL-01.png'
import fire from '../../Resources/Images/Firebase-02.png'
import sharp from '../../Resources/Images/C-Sharp-01.png'
import figma from '../../Resources/Images/Figma-01.png'
import ps from '../../Resources/Images/Adobe-Photoshop-CC-01.png'
import blender from '../../Resources/Images/Blender_logo_no_text.svg.png'
import spline from '../../Resources/Images/spline-logos-idx0zotd8Y.png'

function NewSkills() {
    const skillwrapperRef = useRef(null);

    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const scrollHeight = document.body.scrollHeight - windowHeight;
            const percentage = (scrollY / scrollHeight) * 100;

            setScrollPercentage(percentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const skillwrappers = document.querySelectorAll('.skillwrapper');
        skillwrappers.forEach((skillwrapper) => {
            if (scrollPercentage >= 0.8) {
                skillwrapper.classList.add('show-wrapper');
            } else {
                //skillwrapper.classList.remove('show-wrapper');
            }
        });
    }, [scrollPercentage]);


    return (
        <div className='NewSkills-main'>
            <div className='new_skill-row'>
                <div className='new_skill'>
                    <div className='skillwrapper' ref={skillwrapperRef}>
                        <div className='skill-image'>
                            <img src={front} alt='Front-End Development' />
                        </div>
                        <h2 className='skill-name'>Front-End</h2>
                        <p className='skills-paragraph'>I create engaging user interfaces and responsive web applications. </p>
                        <div className='logos-flex'>
                            <div className='logo-holder'><img src={html} alt='html Development' /></div>
                            <div className='logo-holder'><img src={css} alt='css Development' /></div>
                            <div className='logo-holder'><img src={js} alt='js Development' /></div>
                            <div className='logo-holder'><img src={react} alt='react Development' /></div>
                            <div className='logo-holder'><img src={flutter} alt='fl Development' /></div>
                            <div className='logo-holder'><img src={net} alt='net Development' /></div>
                        </div>
                    </div>
                </div>
                <div className='new_skill'>
                    <div className='skillwrapper' ref={skillwrapperRef}>
                        <div className='skill-image'>
                            <img src={back} alt='Back-End Development' />
                        </div>
                        <h2 className='skill-name'>Back-End</h2>
                        <p className='skills-paragraph'>I build the core functionality and infrastructure of web applications.</p>
                        <div className='logos-flex'>
                            <div className='logo-holder'><img src={node} alt='node Development' /></div>
                            <div className='logo-holder'><img src={sql} alt='sql Development' /></div>
                            <div className='logo-holder'><img src={fire} alt='fire Development' /></div>
                            <div className='logo-holder'><img src={sharp} alt='sharp Development' /></div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='new_skill-row'>
                <div className='new_skill'>
                    <div className='skillwrapper' ref={skillwrapperRef}>
                        <div className='skill-image'>
                            <img src={design} alt='Design' />
                        </div>
                        <h2 className='skill-name'>Design</h2>
                        <p className='skills-paragraph'>I have a keen eye for aesthetics and user-centered design.</p>
                        <div className='logos-flex'>
                            <div className='logo-holder'><img src={figma} alt='figma Development' /></div>
                            <div className='logo-holder'><img src={ps} alt='ps Development' /></div>
                        </div>
                    </div>
                </div>
                <div className='new_skill'>
                    <div className='skillwrapper' ref={skillwrapperRef}>
                        <div className='skill-image'>
                            <img src={modeling} alt='3D Modeling' />
                        </div>
                        <h2 className='skill-name'>3D Modeling</h2>
                        <p className='skills-paragraph'>I bring ideas to life in the virtual realm through 3D modeling.</p>
                        <div className='logos-flex'>
                            <div className='logo-holder blender-holder'><img src={blender} alt='blender Development' /></div>
                            <div className='logo-holder spline-holder'><img src={spline} alt='spline Development' /></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default NewSkills;