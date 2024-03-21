import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./weekly.css";
import Tabs from "./components/Tabs";
import Suncloudmidrain from './Assets/Suncloudmidrain.png'
import Suncloudangledrain from './Assets/Suncloudangledrain.png'
import Wind from './Assets/Wind.png'

console.log(Suncloudmidrain);

function Weekly() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d505bb48f9c02e8d1f29a621cd125f&units=metric`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  const weekly_weather = () => {
     const tabData = [
        { label: "Hourly"},
        { label: "Weekly"},
     ];
  };

  return (
  <div className="background">
    <div className="Weekly">
      <div className="Weekly_container">
        <p id="box1">
        <img id="icon1" src={Suncloudmidrain} alt='Suncloudmidrain icon' width="40%" />
        <div className="Weekly_text">
           <h2>{temperature}ºC</h2>
           <h4>{weather}</h4>
        </div>
        </p>
      </div>
      <div className="Weekly_container1">
        <p id="box2">
           <div className="Weekly_weather">
             <Tabs>
               <div label="Hourly">
                 <div>
                   <p>3pm</p>
                     <img id="icon2" src={Suncloudangledrain} alt="Suncloudangledrain icon" />
                   <p>15</p>
                 </div>
               </div>
               <div label="Weekly">
                  After 'while, <em>Crocodile</em>!
               </div>
             </Tabs>
           </div>
        </p>
      </div>
    </div>
    <div className="Weekly1">
        <div className="Weekly_single">
            <div className="Weekly_container2">
               <p id="box3">
                  <img id="icon3" src={Wind} alt="Wind icon" width="30%"/>
               </p>
            </div>
            <div className="Weekly_container3">
               <p id="box4">
               </p>
            </div>
        </div>
        <div className="Weekly_single1">
            <div className="Weekly_container4">
                <p id="box5">
                </p>
            </div>
            <div className="Weekly_container5">
                <p id="box6">
                </p>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Weekly;