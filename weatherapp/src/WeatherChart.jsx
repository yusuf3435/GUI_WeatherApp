import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
// Import icons
import sunnyIcon from './Assets/sunnyIcon.svg';
import cloudyIcon from './Assets/cloudyIcon.svg';
import rainIcon from './Assets/rainIcon.svg';
import snowIcon from './Assets/snowIcon.svg';

const WeatherChart = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const lat = '44.34'; // Example latitude
    const lon = '10.99'; // Example longitude
    const apiKey = '56aa572e659116cd0a98b7298f8a5ade'; // Replace with your API key

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        setWeatherData(response.data.list);
        const temps = response.data.list.map(item => item.main.temp);
        const timeLabels = response.data.list.map(item => new Date(item.dt * 1000).toLocaleTimeString());
        setTempData(temps);
        setTimes(timeLabels);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const chartData = {
    labels: times,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: tempData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const getWeatherIcon = (mainWeather) => {
    switch (mainWeather.toLowerCase()) {
      case 'clear':
        return sunnyIcon;
      case 'clouds':
        return cloudyIcon;
      case 'rain':
        return rainIcon;
      case 'snow':
        return snowIcon;
      default:
        return sunnyIcon; // Default icon
    }
  };

  return (
    <div className="weather-chart-container">
      <div className="weather-icons">
        {weatherData.slice(0, 4).map((item, index) => (
          <img key={index} src={getWeatherIcon(item.weather[0].main)} alt={item.weather[0].main} className="weather-icon" />
        ))}
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default WeatherChart;
 