import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import styles from './windmap.css';
import NavBar from './nav-bar';
import DaysOfWeek from './daysOfWeek';
import ArrowDots from './arrowdots';
import windIcon from './Assets/Wind.png';


const API_KEY = "ab9338ff83e02055e23a333e63dacc8f";

function getCurrentLocation(){

    return new Promise((resolve, reject) => {

        // Checks that geolocation is supported by the browser
        if ("geolocation" in navigator) {
            // Geolocation is supported
            navigator.geolocation.getCurrentPosition(
              position => {
                const {latitude, longitude} = position.coords;
                resolve({latitude, longitude});
              },
              error => {
                reject(error);
              }
            );
          } else {
            // Error handling if browser does not support geolocation
            reject(new Error("Geolocation is not supported by this browser."));
          }
        });

}

// Function to perform reverse geocoding from the Open Weather Map API
function reverseGeocode(latitude, longitude) {
    return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Stores the information in a json file for access later on
        return response.json();
      });
}

const WindMap = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {

                const { latitude, longitude } = await getCurrentLocation();
                const reverseGeocodeData = await reverseGeocode(latitude, longitude);
                const cityName = reverseGeocodeData[0].name;
                setCity(cityName);
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`);
                setWeatherData(response.data);
                console.log(response.data); //All weather data is in the console
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                console.log(reverseGeocodeData);
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
