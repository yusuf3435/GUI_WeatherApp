import React, { useEffect, useState } from 'react'; import axios from 'axios';
import arrow from './Assets/leftarrow.svg';
import WeatherChart from './WeatherChart';
import styles from './windmap.css';
import WindMap from './windmap';


export function WindVisuals(){ {/* Deals with the navigation to the graphs and maps */}
    const [currentScreen, setCurrentScreen] = useState('windmap');

    const switchToWindMap= () => {
        setCurrentScreen('windmap');
    };

    const switchToWeatherChart = () => {
        setCurrentScreen('weatherchart');
    };

    return(
        
        <div>
            {currentScreen === 'weatherchart' && <WeatherChart/>} {/* Sets the screens depending on the variable stored */}
            {currentScreen === 'windmap' && <WindMap/>}
            <div className="dots-and-arrows-container">
            <button onClick={switchToWindMap} className='button'> {/* Arrow buttons used to switch between the graphs */}
            <img className="arrow left-arrow" src={arrow}/>
            </button>
            <button onClick={switchToWeatherChart} className='button'>
            <img className="arrow right-arrow" src={arrow}/>
            </button>
            </div>
            

            
        </div>

        
    )



}