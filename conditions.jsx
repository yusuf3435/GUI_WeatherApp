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
                    <p>Conditions</p>
                    {/* Call the days of week component */}
                    <DaysOfWeek/>
                    <div className="graph">
                        
                        <ArrowDots/> 
                    </div>
                </div>
            </div>
            {/* Call the navigation bar component */}
        </div>
    )

};

export default WindMap;
