import './WeatherWidget.scss';
import cloudy from '../assets/cloudy.svg';
import { useState, useEffect } from "react";
import icon01d from "../assets/weatherIcons/01d.png"

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
    <section className='weather-widget'>
    <h3>Today's Weather</h3>
    <div className='weather-widget-content'>
      <div className='heading'>
        <img src={icon01d} />
        <div className='current-container'>
          <p className='current-temp'> 77°F</p>
          <p className='current-conditions'>Cloudy</p>
        </div>
      </div>
      <div className='hourly-weather-container'>
        <article className='hourly-weather'>
          <p>9AM</p>
          <img src={icon01d} />
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
        </article>
      </div>
    </div>
  </section>
   );
}

export default WeatherWidget;