import './WeatherWidget.scss';
import cloudy from '../assets/cloudy.svg';

function WeatherWidget() {
  return ( 
    <section className='weather-widget'>
    <h3>Today's Weather</h3>
    <div className='heading'>
      <img src={cloudy} />
      <div className='current-container'>
        <p className='current-temp'> 77°F</p>
        <p className='current-conditions'>Cloudy</p>
      </div>
    </div>
    <div className='hourly-weather-container'>
      <article className='hourly-weather'>
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
      </article>
    </div>
  </section>
   );
}

export default WeatherWidget;