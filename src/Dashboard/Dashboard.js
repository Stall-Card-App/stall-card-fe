import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss';
import Schedule from '../Schedule/Schedule';
import WeatherWidget from '../WeatherWidget/WeatherWidget';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className='Dashboard'>
        <header>Header here</header>
        <WeatherWidget />
        <Schedule />
        <section className='horse-overview'>
          <h3>Today's Weather</h3>
        </section>
      </main>
    </>
  );
}

export default Dashboard;