import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import HeroVideo from '../../Resources/Videos/0001-0780.mp4';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Hero() {
    const videoRef = useRef(null);
    const [showText, setShowText] = useState(false);
    const [typedText, setTypedText] = useState(''); // State to manage typed text content
    const [showText2, setShowText2] = useState(false);
    const [typedText2, setTypedText2] = useState('');
    const [showText3, setShowText3] = useState(false);
    const [typedText3, setTypedText3] = useState('');
    const [showText4, setShowText4] = useState(false);
    const [typedText4, setTypedText4] = useState('');
    const [showOverflow, setShowOverflow] = useState(false); // State for showing overflow element
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        // Listen for changes in showOverflow
        if (showOverflow) {
            // After showOverflow becomes true, navigate to "/Portfolio" after a 1-second delay
            const timeoutId = setTimeout(() => {
                navigate('/Portfolio');
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [showOverflow, navigate]);

    useEffect(() => {
        const currentVideoRef = videoRef.current;

        if (currentVideoRef) {
            currentVideoRef.addEventListener('timeupdate', () => {
                if (currentVideoRef.currentTime >= currentVideoRef.duration - 0.5) {
                    currentVideoRef.pause();
                }
            });
        }

        return () => {
            if (currentVideoRef) {
                currentVideoRef.removeEventListener('timeupdate', () => {
                    if (currentVideoRef.currentTime >= currentVideoRef.duration - 0.5) {
                        currentVideoRef.pause();
                    }
                });
            }
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText(true);
        }, 3000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText(false);
        }, 7000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText2(true);
        }, 8000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText2(false);
        }, 16000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText3(true);
        }, 17000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText3(false);
        }, 25000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText4(true);
        }, 26000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // After 3 seconds, set showText to true to add the class
        const timeoutId = setTimeout(() => {
            setShowText4(false);
        }, 32000);

        // Clean up the timeout on unmount
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        // Run the typeWriter function when showText becomes true
        if (showText) {
            typeWriter();
        }
    }, [showText]);

    const typeWriter = () => {
        const txt = ' Hi, my name is Niko.';
        const speed = 50;
        let i = 0;

        const intervalId = setInterval(() => {
            if (i < txt.length) {
                setTypedText(prevTypedText => prevTypedText + txt.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    };

    useEffect(() => {
        // Run the typeWriter function when showText becomes true
        if (showText2) {
            typeWriter2();
        }
    }, [showText2]);

    const typeWriter2 = () => {
        const txt = " I hold a Bachelor's degree in Computer Science.";
        const speed = 50;
        let i = 0;

        const intervalId = setInterval(() => {
            if (i < txt.length) {
                setTypedText2(prevTypedText => prevTypedText + txt.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    };

    useEffect(() => {
        // Run the typeWriter function when showText becomes true
        if (showText3) {
            typeWriter3();
        }
    }, [showText3]);

    const typeWriter3 = () => {
        const txt = " I enjoy transforming stunning designs into functional code ...";
        const speed = 50;
        let i = 0;

        const intervalId = setInterval(() => {
            if (i < txt.length) {
                setTypedText3(prevTypedText => prevTypedText + txt.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    };

    useEffect(() => {
        // Run the typeWriter function when showText becomes true
        if (showText4) {
            typeWriter4();
        }
    }, [showText4]);

    const typeWriter4 = () => {
        const txt = " ... and connecting it to databases.";
        const speed = 50;
        let i = 0;

        const intervalId = setInterval(() => {
            if (i < txt.length) {
                setTypedText4(prevTypedText => prevTypedText + txt.charAt(i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);
    };

    useEffect(() => {
        // After 32 seconds, set showOverflow to true to slide in hero-overflow
        const timeoutId = setTimeout(() => {
            setShowOverflow(true);
        }, 32000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handlePulsingCircleClick = () => {
        setShowOverflow(true);
    };

    return (
        <div className='hero-overflow-hide'>
        <div className='hero-main'>
            <video autoPlay loop muted className='hero-video' ref={videoRef}>
                <source src={HeroVideo} type='video/mp4' />
            </video>

            <div className={`overflow-text-container ${showText ? 'show-text' : ''}`}>
                <div className='container-left'>
                    <div className='headers-container'>
                        <h1 className={`greeting ${showText ? 'show-text' : ''}`}>
                            {typedText}
                        </h1>

                        <h1 className={`degree ${showText2 ? 'show-text' : ''}`}>{typedText2}</h1>

                        <h1 className={`design ${showText3 ? 'show-text' : ''}`}>{typedText3}</h1>

                        <h1 className={`database ${showText4 ? 'show-text' : ''}`}>{typedText4}</h1>
                    </div>
                </div>
                <div className='container-right' ></div>
            </div>

            <div className={`hero-overflow ${showOverflow ? 'slide-in' : ''}`}></div>

        </div>

        

        <div className="pulsing-circle" onClick={handlePulsingCircleClick}>Skip</div>;


        </div>

    );
}

export default Hero;