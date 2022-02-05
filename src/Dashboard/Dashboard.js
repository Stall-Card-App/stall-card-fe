import Sidebar from '../Sidebar/Sidebar';
import cloudy from '../assets/cloudy.svg';
import './Dashboard.scss';
import Schedule from '../Schedule/Schedule';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className='Dashboard'>
        <header>Header here</header>
        <section className='weather-widget'>
          <h3>Today's Weather</h3>
          <img src={cloudy} />
        </section>
        <Schedule />
        <section className='horse-overview'>
          <h3>Today's Weather</h3>
          <img src={cloudy} />
        </section>
      </main>
    </>
  );
}

export default Dashboard;