import React from "react";
import "./HourWeather.scss";
import weatherIcons from "../WeatherWidget/icons.js";

const HourWeather = ({time, temperature, conditions, icon}) => {

    const hour = new Date(time).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
 
    return (
        <article className='hourly-weather'>
            <p>{hour}</p>
            <img src={weatherIcons[icon]} alt={`Icon for ${conditions}`}/>
            <p>{`${Math.round(temperature)}°`}</p>
         </article>
    )
}

export default HourWeather;