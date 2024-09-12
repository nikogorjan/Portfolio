import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../../GoogleAnalytics/GoogleAnalytics';


const Main = () => {
    

    return (
        <div>
            <Helmet>
                <title>Niko Gorjan</title>
                <meta name='description' content='Niko Gorjan: Computer scientist, web & e-commerce developer, 3D modeling, design, front-end & back-end.'></meta>
                <link rel='canonical' href='/'></link>
            </Helmet>
            <GoogleAnalytics/>
            <Hero/>
        </div>
    );
};

export default Main;