import React, { createContext, useContext, useState, useEffect } from 'react';

const API_KEY = "ab9338ff83e02055e23a333e63dacc8f";
// This file allows geolocation data to be passed between components without having to re-retrieve the information (which causes issues due its asynchronous nature)
const GeolocationContext = createContext();

// Function will be passed to allow other components to access the context
export const useGeolocation = () => useContext(GeolocationContext);


// Function to perform reverse geocoding from the Open Weather Map API
function reverseGeocode(latitude, longitude) {
    return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response was not ok');
        }
        // Returns the city name for access later on
        return response.json();
      });
}

export const GeolocationProvider = ({ children }) => {
    // State for storing geolocation data
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [city, setCity] = useState(null);

    // Gets and updates geolocation data
    const updateGeolocation = async () => {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
    
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
    
            // Call reverse geocoding to get the city name
            const reverseGeocodeData = await reverseGeocode(position.coords.latitude, position.coords.longitude);
            const cityName = reverseGeocodeData[0].name;
            setCity(cityName);
        } catch (error) {
            console.error(error);
        }
    };
    

     // Fetches the city name and updates state
    useEffect(() => {
        updateGeolocation();
    }, []); // Run only once on initial render

    return (
        <GeolocationContext.Provider value={{ latitude, longitude, city}}>
            {children}
        </GeolocationContext.Provider>
    );
};
