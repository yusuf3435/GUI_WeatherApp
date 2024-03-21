function getCurrentLocation(){

    // Getting geolocation takes some time, need to use Promise to ensure that the code waits before executing
    return new Promise((resolve, reject) => {

        // Checks that geolocation is supported by the browser
        if ("geolocation" in navigator) {
            // Geolocation is supported
            navigator.geolocation.getCurrentPosition(
              position => {
                const {latitude, longitude} = position.coords;
                resolve({latitude, longitude});
              },
              error => {
                reject(error);
              }
            );
          } else {
            // Error handling if browser does not support geolocation
            reject(new Error("Geolocation is not supported by this browser."));
          }
        });

}

// Function to perform reverse geocoding from the Open Weather Map API
function reverseGeocode(latitude, longitude) {
    return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Stores the information in a json file for access later on
        return response.json();
      });
}

const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                // Asynchronous code, needs to wait for result before continuing
                const {latitude, longitude} = await getCurrentLocation();
                const reverseGeocodeData = await reverseGeocode(latitude, longitude);
                const cityName = reverseGeocodeData[0].name;
                setCity(cityName);
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`);
                setWeatherData(response.data);
                console.log(response.data); //All weather data is in the console
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                console.log(reverseGeocodeData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, []);