import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss';
import Schedule from '../Schedule/Schedule';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import Overview from '../Overview/Overview';

function Dashboard() {
  return (
    <>
      <main className='Dashboard'>
        <Sidebar className='flop' />
        <header>Header here</header>
        <WeatherWidget />
        <Schedule />
        <Overview />
      </main>
    </>
  );
}

export default Dashboard;