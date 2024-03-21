import React, {useState} from 'react';
import arrow from './Assets/leftarrow.svg';
import circle from './Assets/circle.svg';
import WindMap from './windmap';
import Search from  './search';


// Component for use to switch between wind map and conditions
function ArrowDots(){

    // const [currentScreen, setCurrentScreen] = useState('search');

    // const switchToConditions = () => {
    //     setCurrentScreen('search');
    // };

    // const switchToWindMap = () => {
    //     setCurrentScreen('windmap');
    // }; 
    return(
        <div className="dots-and-arrows-container">
            <img className="arrow left-arrow" src={arrow}/>
            <img className="dots" src={circle} />
            <img className="dots" src={circle} />
            <img className="dots" src={circle} />
            <img className="arrow right-arrow" src={arrow} />
        </div>

 
    )
}

export default ArrowDots;