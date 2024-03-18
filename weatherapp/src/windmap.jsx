import React, {useState, useEffect} from 'react';
import styles from './windmap.css';
import NavBar from './nav-bar';
import DaysOfWeek from './daysOfWeek';
import homeIcon from './Assets/home.png';
import location from './Assets/location.png';
import burgerIcon from './Assets/burgericon.png'
import windIcon from './Assets/Wind.png'

const WindMap = (props) => {
    
    return(
        
        <div className="background">
            
            <div className="info-container">
                <div className="info">
                    <p>wind map</p>
                    
                    <DaysOfWeek/>
                    <div className="wind-info">
                       
                        <img id="wind1" src={windIcon} alt='Wind Icon'/>
                        <p id="wind-speed">Wind: 392</p>
                        <img id="wind2" src={windIcon} alt='Wind Icon'/>
                        <p id="gust-speed">Gust: 900</p>
                    </div>
                </div>
            </div>
            
            < NavBar/>

            

        </div>
    )

};

export default WindMap;
