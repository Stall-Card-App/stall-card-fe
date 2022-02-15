import React from "react";
import "./HourWeather.scss";
import weatherIcons from "../WeatherWidget/icons.js";

const HourWeather = ({time, temperature, conditions, icon}) => {
    return (
        <article className='hourly-weather'>
            <p>{time}</p>
            <img src={weatherIcons[icon]} alt={`Icon for ${conditions}`}/>
            <p>{`${Math.round(temperature)}°`}</p>
         </article>
    )
}

export default HourWeather;