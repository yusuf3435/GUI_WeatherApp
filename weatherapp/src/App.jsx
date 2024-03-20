import React, { useState } from 'react';
import Weather from './Weather';
import WindMap from './windmap';
import { Search } from './search';
import homeIcon from './Assets/home.png';
import location from './Assets/location.png';
import burgerIcon from './Assets/burgericon.png'

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('search');

  const switchToSearch = () => {
    setCurrentScreen('search');
  };

  const switchToWindMap = () => {
    setCurrentScreen('windmap');
  };

  return (
    <div>
      <div className='nav-bar'>
      <button onClick={switchToSearch} className='button' >
      <img className="location" src={location} alt="location pin"/>
      </button>
      <button onClick={switchToWindMap}   className='button'>
      <img className="burger" src={burgerIcon} alt="burger icon"/>
      </button>
      <button className='button'> 
        <img className="home" src={homeIcon} alt="home icon"/>
      </button>
      </div>


      {currentScreen === 'search' && <Search />}
      {currentScreen === 'windmap' && <WindMap />}
    </div>
  );
};

export default App;


