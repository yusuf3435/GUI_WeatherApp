import React, { useEffect, useState } from 'react'; import axios from 'axios';

export function Background(){ {/* Makes the background for the app */}
    return(
      <div className="background"></div>
  
    )
      
    
  }




const WeatherSearch = () => { {/* The functionality of the search algorithm */}
    const [city, setCity] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    const fetchData = async (city) => { {/* Fetches weather data using api depending on the city entered by the user */}
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ab9338ff83e02055e23a333e63dacc8f`);
            const data = response.data;
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => { {/* Saves on local storage so it does not dissappear after switching sections. */}
        const savedHistory = localStorage.getItem('searchHistory');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    const handleInputChange = (e) => { {/* Input Handler */}
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => { {/* Handles the submitting of the data */}
        e.preventDefault();
        const data = await fetchData(city);
        if (data) {
            const updatedHistory = [{ city, data }, ...searchHistory.slice(0, 2)];
            setSearchHistory(updatedHistory);
            localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
            setCity('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='form-container'> {/* Initiates the input bar */}
                <input
                    id='SearchBar'
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit" id='SearchButton'></button> {/* The submit button of the input area */}
            </form>

            {/* Display the last three searches with weather data */}
            <div className="search-history-container"> {/* Container of the Search Histories */}
                <h3>Last 3 Searches:</h3>
                <div className="search-history"> {/* Class for each seperate search history box */}
                {searchHistory.slice(0, 3).map((search, index) => (
                    <div key={index} id='SearchEntry'>
                        {search.data ? (  
                            <> {/* Fetches all the data for the city */}
                                <h4 id='City'>{search.city}</h4>
                                <p id='Temp'>{search.data.main.temp}°C</p>
                                <p id='Desc'>{search.data.weather[0].description}</p>
                                <p id='Feels'>Feels like: {search.data.main.feels_like}°C</p>
                                <p id='Hum'>Humidity: {search.data.main.humidity}%</p>
                                <p id='Pres'>Pressure: {search.data.main.pressure}</p>
                                <p id='Wind'>Wind Speed: {search.data.wind.speed}m/s</p>
                            </>
                        ) : (
                            <p>Error fetching weather data for {search.city}</p>
                        )}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default WeatherSearch;


export function Search(){ {/* Uses the components to build the screen */}
    return(
        <div>
            <Background/>
            <WeatherSearch/>
            
        </div>
    )
}

