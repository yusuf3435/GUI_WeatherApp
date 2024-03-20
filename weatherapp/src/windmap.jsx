import React, { useEffect, useState,  } from 'react'; 
import axios from 'axios';
import styles from './windmap.css';
import NavBar from './nav-bar';
import DaysOfWeek from './daysOfWeek';
import ArrowDots from './arrowdots';
import windIcon from './Assets/Wind.png';


const API_KEY = "ab9338ff83e02055e23a333e63dacc8f";

const WindMap = () => {

    function lon2tile(lon, zoom) {
        return Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
    }
    
    function lat2tile(lat, zoom) {
        return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
    }
    
    const zoom = 10; // Adjust zoom level as needed
    const latitude = 51.5074; // Example latitude (London)
    const longitude = -0.1278; // Example longitude (London)
    
    const x = lon2tile(longitude, zoom);
    const y = lat2tile(latitude, zoom);
    
    // console.log('x:', x);
    // console.log('y:', y);

    const map = `https://tile.openweathermap.org/map/wind_new/${zoom}/${x}/${y}.png?appid=${API_KEY}`;
    
    return(
        
        <div className="background">
            
            <div className="info-container">
                <div className="info">
                    <p>wind map</p>
                    {/* Call the days of week component */}
                    {/* <img src={map} alt="Wind Map" /> */}
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
        </div>
    )

};

export default WindMap;
