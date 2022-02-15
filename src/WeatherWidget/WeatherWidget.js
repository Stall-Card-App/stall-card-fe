import './WeatherWidget.scss';
import "../HourWeather/HourWeather";
import { useState, useEffect } from "react";
import weatherIcons from "./icons.js";
import Loading from "../Loading/Loading";

function WeatherWidget() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetch("https://aqueous-savannah-80171.herokuapp.com/forecasts?location=denver, co")
    .then(response => response.json())
    .then(data => {console.log(data) 
      setForecast(data.data.attributes)})
    .catch(error => console.log(error))
  },[])

  return ( 
  <div>
    {!forecast && <Loading />}
    {forecast && 
    <section className='weather-widget'>
    <h3>Today's Weather</h3>
    <div className='weather-widget-content'>
      <div className='heading'>
        <img src={weatherIcons[forecast.current_weather.icon]} />
        <div className='current-container'>
          <p className='current-temp'>{`${Math.round(forecast.current_weather.temperature)}°F`}</p>
          <p className='current-conditions'>{forecast.current_weather.conditions}</p>
        </div>
      </div>
      <div className='hourly-weather-container'>
        {forecast.hourly_weather.map((hour) => {
          return (
            <HourWeather 
              time={hour.time}
              temperature={hour.temperature}
              conditions={hour.conditions}
              icon={hour.icon}
            />
          )
        })}
        {/* <article className='hourly-weather'>
          <p>9AM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>10AM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>11AM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>12PM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>1PM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>2PM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>3PM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article>
        <article className='hourly-weather'>
          <p>4PM</p>
          <img src={cloudy} />
          <p>77°</p>
        </article> */}
      </div>
    </div>
  </section>}
  </div>
   );
}

export default WeatherWidget;