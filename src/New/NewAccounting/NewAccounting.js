import React, { useEffect, useRef } from 'react';
import './NewAccounting.css'
import acc from '../../Resources/Videos/acc3.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Letter from '../Letter/Letter';

function animateJet() {
    gsap.registerPlugin(MotionPathPlugin);

    const jet = document.getElementById('jet');
    const path = document.getElementById('path');

    const val = { distance: 0 };


    gsap.to(val, {
        // Animate from distance 0 to the total distance
        distance: path.getTotalLength(),
        // Loop the animation
        repeat: -1,
        // Make the animation lasts 5 seconds
        duration: 25,
        // Function call on each frame of the animation
        onUpdate: () => {
            // Query a point at the new distance value
            const point = path.getPointAtLength(val.distance);
            // Update the circle coordinates
            jet.setAttribute('cx', point.x);
            jet.setAttribute('cy', point.y);
        }, 

        
        
    });
}

function NewAccounting({ onButtonClick }) {
     useEffect(() => {
         animateJet(); // Start the animation when the component mounts
     }, []);
     const workParagraph = useRef();
     const component = useRef();

     useEffect(() => {
        let ctx = gsap.context(() => {
            

            ScrollTrigger.create({
                trigger: component.current,
                start: 'top center', // Adjust this value as needed
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
                once:true,
                markers:false,
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
        onButtonClick(info);
    };


    return (
        <div>
            <div className="NewAccounting-main" ref={component}>
                <div className='left-accounting'>
                    <video className="video-acc" autoPlay loop muted playsInline >
                        <source src={acc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='right-accounting' >
                    <div className='r-row paragraphs-row'>
                    <div className='acc-paragraph-container' ref={workParagraph} style={{ transform: 'translateX(100%)', opacity: 0 }}>
                                        <h1 className='my-work-header'>Business-Minded</h1>
                                        <p className='my-work-paragraph'>During my academic journey, I combined business and technology in my final college project, earning my diploma for developing an innovative accounting app using Flutter.</p>
                                    </div>

                    </div>
                    <div className='r-row'>
                        <div className='r-cell'>
                            <div className='scroll-demo' id='anything'>
                                <svg viewBox="0 0 1200 870">
                                    <path d="M 331 162 C 359.8 129.7 399.1 107.2 441.3 97.6 C 483.5 88.1 528.4 91.5 569 106.5 C 609.6 121.4 645.8 147.8 673.1 181.4 C 700.5 214.9 719 255.4 727.4 297.8 C 744.2 382.7 719.1 473.6 666.4 542.2 C 613.7 610.8 535.1 657.6 451 678 C 408.1 688.4 363.4 692.3 319.6 687.1 C 275.7 681.9 232.7 667.4 196 643 C 159.2 618.6 128.8 584.1 111.3 543.5 C 93.8 503 89.7 456.4 102 414 C 110.9 383.3 128.2 355.1 151.5 333.2 C 174.7 311.3 203.8 295.6 234.8 288.1 C 265.9 280.7 298.9 281.3 329.6 289.9 C 360.4 298.4 389 314.8 412 337 C 449.9 373.5 472.2 426.5 468.6 479 C 466.8 505.3 458.7 531.1 444.8 553.5 C 430.9 575.8 411.2 594.6 388 607 C 355.9 624.2 317.5 628.9 282 621 C 254.9 615 229.2 601.7 209.7 581.9 C 190.2 562.1 177.2 535.7 175 508 C 173.5 488.9 177 469.6 184.7 452.1 C 192.3 434.6 204.1 418.9 218.4 406.3 C 247.2 381.1 285.8 368.5 324 368 C 365.7 367.4 406.7 380.5 443.5 400.1 C 480.3 419.7 513.3 445.7 545.2 472.6 C 577.1 499.4 608.2 527.4 642.2 551.5 C 676.2 575.6 713.5 596 754 606 C 801.2 617.6 851.9 614.4 897.6 597.6 C 943.2 580.8 983.7 550.5 1013.2 511.8 C 1042.8 473.2 1061.4 426.3 1067 378 C 1072.7 329.7 1065.5 280 1047 235 C 1026.5 185.1 992 140.9 947.8 110 C 903.7 79 849.9 61.6 796 62 C 753.9 62.3 711.8 73.5 675.8 95.1 C 639.7 116.7 609.8 148.9 592 187 C 572.6 228.5 567.9 276.6 577.8 321.4 C 587.6 366.1 611.7 407.5 645 439 C 674.9 467.2 711.4 487.4 748.3 505.3 C 785.3 523.3 823.3 539.4 858.3 561 C 893.2 582.7 925.4 610.4 945.4 646.4 C 955.3 664.4 962.1 684.2 964.1 704.7 C 966.1 725.1 963.2 746.2 955 765 C 947.2 782.8 934.7 798.4 919.6 810.6 C 904.5 822.8 886.9 831.8 868.4 837.8 C 831.5 849.7 791.7 849.8 753 846 C 648.1 835.7 545.9 796.8 462 733 C 398.4 684.6 345.4 621.9 310.9 549.9 C 276.5 477.8 260.8 396.5 269 317 C 274.8 260.7 293.3 204.2 331 162" fill="none" id="path" stroke="white" strokeWidth="2"></path>
                                    <circle r="32" cx="0" cy="0" fill="rgb(255, 241, 165)" className="circle" id='jet'/>  
                                    {/*<image href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/jet.png" r="20" x="0" y="0" width="150" height="150" class="circle" id='jet2' >    
                                    </image>*/}
                                    {/*<path 
                                        d="M 8 16 L 20 2 L 26 0 L 24 6 L 10 18 C 12 20 12 22 14 20 C 14 22 16 24 14 24 A 2.84 2.84 0 0 1 12 26 A 10 10 0 0 0 8 20 Q 7 19.8 7 21 T 4 23 T 2.4 22 T 5 19 T 6 18 A 10 10 90 0 0 0 14 A 2.84 2.84 0 0 1 2 12 C 2 10 4 12 6 12 C 4 14 6 14 8 16 M 20 2 L 20 6 L 24 6 L 20.4 5.6 L 20 2"
                                r="32" fill="red" stroke="red" class="circle" id='jet2' cx="0" cy="0" width="150" height="150"/>*/}

                                </svg>
                            </div>
                        </div>
                        <div className='r-cell cell2' onClick={() => handleButtonClick('Contact')}><Letter /></div>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default NewAccounting;