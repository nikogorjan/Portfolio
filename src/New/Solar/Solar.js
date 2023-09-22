import React from 'react';
import './Solar.css';



function Solar() {


    return (
        <div className='solar-main'>
            <div class="background">
                <span class="header"></span>
                <div class="sun"></div>
                <div class="planet_1-orbit">
                    <div class="planet_1"></div>
                </div>
                <div class="planet_2-orbit">
                    <div class="planet_2">
                        <div class="planet_dec-2"></div>
                        <div class="moon_2-orbit">
                            <div class="moon_2"></div>
                        </div>
                    </div>
                </div>
                <div class="planet_3-orbit">
                    <div class="planet_3">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solar;