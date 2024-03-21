import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './windmap.css';
import NavBar from './nav-bar';
import DaysOfWeek from './daysOfWeek';
import ArrowDots from './arrowdots';
import windIcon from './Assets/Wind.png';
import WeatherChartComponent from './WeatherChartComponent'; // Importing the WeatherChartComponent

const WeatherChart = () => {
  const [weatherDescription, setWeatherDescription] = useState('');

  const fetchWeatherByCoords = async (latitude, longitude) => {
    const apiKey = '56aa572e659116cd0a98b7298f8a5ad';
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      );
      const description = response.data.weather[0].description;
      setWeatherDescription(description);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        error => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="background">
      <NavBar />
      <div className="info-container">
        <div className="info">
          <p>weather chart</p>
          <DaysOfWeek />
          <WeatherChartComponent /> {/* Using the WeatherChartComponent here */}
          <p className="below-weather-chart-info">{weatherDescription}</p>
          <ArrowDots />
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
