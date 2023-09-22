import React from 'react';
import './Letter.css';



function Letter() {


    return (
        <div className='letter-main'>
            <div class="letter-image">
                <div class="animated-mail">
                    <div class="back-fold"></div>
                    <div class="letter">
                        <div class="letter-border"></div>
                        <div class="letter-title"></div>
                        <div class="letter-context"></div>
                        <div class="letter-stamp">
                            <div class="letter-stamp-inner"></div>
                        </div>
                    </div>
                    <div class="top-fold"></div>
                    <div class="body"></div>
                    <div class="left-fold"></div>
                </div>
                
            </div>


        </div>
    );
}

export default Letter;