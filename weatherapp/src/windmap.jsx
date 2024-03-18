import React, { useEffect, useState } from 'react'; import axios from 'axios';
import styles from './windmap.css';
import NavBar from './nav-bar';
import DaysOfWeek from './daysOfWeek';
import ArrowDots from './arrowdots';
import windIcon from './Assets/Wind.png';


const WindMap = (props) => {


    return(
        
        <div className="background">
            
            <div className="info-container">
                <div className="info">
                    <p>wind map</p>
                    {/* Call the days of week component */}
                    <DaysOfWeek/>
                    <div className="wind-info">
                        <img id="wind1" src={windIcon} alt='Wind Icon'/>
                        <p id="wind-speed">Wind: {}m/s</p>
                        <img id="wind2" src={windIcon} alt='Wind Icon'/>
                        <p id="wind-deg">Direction: 400{}°</p>
                        {/* Call the arrow and dots component */}
                        <ArrowDots/> 
                    </div>
                </div>
            </div>
            {/* Call the navigation bar component */}
            <NavBar/>
        </div>
    )

};

export default WindMap;
