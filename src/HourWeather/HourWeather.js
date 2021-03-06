import React from "react";
import "./HourWeather.scss";
import weatherIcons from "../WeatherWidget/icons.js";

const HourWeather = ({time, temperature, conditions, icon}) => {
    const date = new Date(time).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
    const hour = date.split(":");
    const amPm = hour[1].split(" ");
 
    return (
        <article className='hourly-weather'>
            <p>{`${hour[0]}${amPm[1]}`}</p>
            <img src={weatherIcons[icon]} alt={`Icon for ${conditions}`}/>
            <p>{`${Math.round(temperature)}°`}</p>
         </article>
    )
}

export default HourWeather;