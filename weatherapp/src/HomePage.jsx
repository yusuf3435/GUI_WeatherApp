import { Background } from "./search";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function HomeData() {

    const [forecastData, setForecastData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchForecast = async (latitude, longitude) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=56aa572e659116cd0a98b7298f8a5ade`);
            setForecastData(response.data.daily); // Assuming daily forecast data is provided
        } catch (error) {
            console.error('Error fetching weather forecast data:', error);
            setError('Failed to fetch weather forecast data.');
        }
        };

        const fetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchForecast(latitude, longitude);
            },
            (error) => {
                console.error('Error getting location:', error);
                setError('Failed to get location.');
            }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
        };

        fetchLocation();
    }, []);
  
    return (
      <div>
        <div className="home-container">
        <div className="home-content">
          {/* Eight boxes */}
          <div className="longbox">
          <h2>Weather Forecast for the Next Week</h2>
      {forecastData.map((day, index) => (
        <div key={index}>
          <p>Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
          <p>Temperature: {day.temp.day} °C</p>
          {/* You can include other weather data such as description, humidity, etc. */}
        </div>
      ))}
      {error && <p>{error}</p>}
        </div>

          <div className="longbox"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      </div>
    );

  }


export function HomePage(){
    return(
        <div>
            <Background/>
            <HomeData/>
        </div>
    )
}