import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./weekly.css";
import { Background } from "./search";

import Suncloudmidrain from './Assets/Suncloudmidrain.png';
import Suncloudangledrain from './Assets/Suncloudangledrain.png';
import Wind from './Assets/Wind.png';
import Visibility from './Assets/Visibility.png';
import Sealevel from './Assets/Sealevel.png';
import Humidity from './Assets/Humidity.png';



console.log(Suncloudmidrain);
console.log(Suncloudangledrain);
console.log(Wind);
console.log(Visibility);
console.log(Sealevel);
console.log(Humidity);

function Weekly() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [wind, setWind] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [seaLevelPressure, setSeaLevelPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [units, setUnits] = useState("metric");


  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=${units}`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      setWind(res.data.wind.speed);
      setVisibility(res.data.visibility);
      setSeaLevelPressure(res.data.main.pressure);
      setHumidity(res.data.main.humidity);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);






  return (
  <div className="background">
    <div className="Weekly">
      <div className="longbox">
        <p id="box1">
        <img id="icon1" src={Suncloudmidrain} alt='Suncloudmidrain icon' width="40%" />
        <div className="Weekly_text">
           <h2>{temperature}ºC</h2>
           <h4>{weather}</h4>
        </div>
        </p>
      </div>
    </div>
    <div className="Weekly1">
        <div className="Weekly_single">
            <div className="box">
               <p>
                  <img id="icon3" src={Wind} alt="Wind icon" width="30%"/>
                  <div className="wind_info">
                    <h5>wind</h5>
                    <h3>{wind}km/h</h3>
                    <h4>DUE SOUTH-WEST</h4>
                  </div>
               </p>
            </div>
            <div className="box">
               <p>
                  <img id="icon4" src={Visibility} alt="Visibility icon" />
                  <h5>visibility</h5>
                  <h3 id="Visibility_text">{visibility}km</h3>
                  <h4>Perfectly clear</h4>
               </p>
            </div>
        </div>
        <div className="Weekly_single1">
            <div className="box">
                <p>
                <img id="icon5" src={Sealevel} alt="Sea level pressure icon" width="20%"/>
                <h5>Sea level pressure</h5>
                <h3 id="SeaLevelPressure_text">{seaLevelPressure}hPa</h3>
                <h4>Perfect pressure</h4>
                </p>
            </div>
            <div className="box">
                <p>
                <img id="icon6" src={Humidity} alt="Humidity icon" width="20%"/>
                <h5>Humidity</h5>
                <h3>{humidity}%</h3>
                </p>
            </div>
        </div>
    </div>
  </div>

  );
}

export default Weekly;
