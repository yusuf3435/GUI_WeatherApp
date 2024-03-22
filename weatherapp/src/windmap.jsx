import React, { useEffect, useState,  } from 'react'; 
import axios from 'axios';
import styles from './windmap.css';

import DaysOfWeek from './daysOfWeek';
import ArrowDots from './arrowdots';
import windIcon from './Assets/Wind.png';
import { useGeolocation } from './geolocation.jsx';


const API_KEY = "ab9338ff83e02055e23a333e63dacc8f";

const WindMap = () => {

    const {latitude, longitude, city} = useGeolocation();
    const [weatherData, setWeatherData] = useState(null);
    

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
                console.log(response)
                setWeatherData(response.data);
                console.log(weatherData);
                console.log(response.data); //All weather data is in the console
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);

    return(
        
        <div className="background">
            
            <div className="info-container">
                <div className="info">
                    <p>wind map</p>
                    {/* Call the days of week component */}
                    {/* <img src={map} alt="Wind Map" /> */}
                    <DaysOfWeek/>
                    <div className="wind-info">
                        {/* This links to an external website and is NOT our work, the APIs windmap quality is very bad */}
                        <div className='link-container'>
                            <a href={`https://zoom.earth/maps/wind-speed/#view=${latitude},${longitude},11z/model=icon`}>Click here for a detailed wind map</a>
                        </div>
                        <img id="wind1" src={windIcon} alt='Wind Icon'/>
                        {/* Conditionally renders the wind speed, useState is asynchronous so it is not instant but almos */}
                        <p id="wind-speed">Wind: {weatherData && weatherData.wind.speed}m/s</p>
                        <img id="wind2" src={windIcon} alt='Wind Icon'/>
                        <p id="wind-deg">Direction: {weatherData && weatherData.wind.deg}°</p>
                        {/* Call the arrow and dots component */}

                    </div>
                </div>
            </div>
        </div>
    )

};

export default WindMap;
