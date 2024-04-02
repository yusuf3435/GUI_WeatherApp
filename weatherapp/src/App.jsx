import React, { useState } from 'react';
import Weather from './Weather';
import WindMap from './windmap';
import WeatherChart from './WeatherChart';
import { Search } from './search';
import homeIcon from './Assets/home.png';
import location from './Assets/location.png';
import burgerIcon from './Assets/burgericon.png';
import { WindVisuals } from './Visuals';
import { HomePage } from './HomePage';
import Weekly from './weekly';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('weekly'); {/* Functions to set the screens */}

  const switchToSearch = () => {
    setCurrentScreen('search');
  };

  const switchToWindVisuals = () => { 
    setCurrentScreen('windvisuals'); 
  };

  const switchToWeekly = () => { 
    setCurrentScreen('weekly'); 
  };


  return (
    <div>
      <div className='nav-bar'>
        <button onClick={switchToSearch} className='button'> {/* Search button */}
          <img className="location" src={location} alt="location pin"/>
        </button>
        <button onClick={switchToWindVisuals} className='button'> {/* Changed onClick handler */}
          <img className="burger" src={burgerIcon} alt="burger icon"/>
        </button>
        <button onClick={switchToWeekly} className='button'> 
          <img className="home" src={homeIcon} alt="home icon"/> {/* Home Button */}
        </button>
      </div>

      {currentScreen === 'search' && <Search />}
      {currentScreen === 'windvisuals' && <WindVisuals />} {/* Loads the screen depending on the variable stored */}
      {currentScreen === 'weekly' && <Weekly />}
    </div>
  );
};

export default App;