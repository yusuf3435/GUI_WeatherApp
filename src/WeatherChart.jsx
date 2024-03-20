import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './windmap.css'

const WeatherChart = () => {
    const [weatherData, setWeatherData] = useState([]);

    // Fetch weather data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make API call to fetch weather data
                const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab9338ff83e02055e23a333e63dacc8f');
                const data = await response.json();
                
                // Process the data and extract relevant information
                const processedData = data.list.map(item => ({
                    time: new Date(item.dt * 1000).toLocaleTimeString(),
                    temperature: item.main.temp,
                    // You can add more data fields like humidity, etc. as needed
                }));

                setWeatherData(processedData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    // Render the chart once weatherData is fetched
    useEffect(() => {
        if (weatherData.length > 0) {
            renderChart();
        }
    }, [weatherData]);

    // Function to render the chart
    const renderChart = () => {
        const ctx = document.getElementById('weatherChart').getContext('2d');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: weatherData.map(item => item.time),
                datasets: [{
                    label: 'Temperature',
                    data: weatherData.map(item => item.temperature),
                    borderColor: 'blue',
                    borderWidth: 1,
                    fill: false,
                }]
            },
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)',
                        },
                    },
                },
            },
        });
    };

    return (
        <div>
            <canvas id="weatherChart" width="400" height="200"></canvas>
        </div>
    );
};

export default WeatherChart;
