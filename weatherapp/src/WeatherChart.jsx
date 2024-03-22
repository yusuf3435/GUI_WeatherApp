import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './windmap.css';

import DaysOfWeek from './daysOfWeek';
import ArrowDots from './arrowdots';
import windIcon from './Assets/Wind.png';
import WeatherChartComponent from './WeatherChartComponent'; // Importing the WeatherChartComponent

const WeatherChart = () => {
  const [weatherDescription, setWeatherDescription] = useState('');

  const fetchWeatherByCoords = async (latitude, longitude) => { {/* Fetching Weather data by location */}
    const apiKey = '56aa572e659116cd0a98b7298f8a5ade'; 
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
    const getLocation = async () => { {/* Uses geolocation to get the location */}
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      } catch (error) {
        console.error('Error getting location:', error.message);
      }
    };

    if (navigator.geolocation) {
      getLocation();
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="background">
      <div className="info-container">
        <div className="info">
          <p>Weather Chart</p> {/* Changed 'weather chart' to 'Weather Chart' for consistency */}
          <DaysOfWeek />
          <WeatherChartComponent /> {/* Using the WeatherChartComponent here */}
          <p className="below-weather-chart-info">{weatherDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
