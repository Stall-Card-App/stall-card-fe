import Sidebar from '../Sidebar/Sidebar';
import cloudy from '../assets/cloudy.svg';
import './Dashboard.scss';

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
        <section className='schedule'>
          <h3>Today's Weather</h3>
          <img src={cloudy} />
        </section>
        <section className='horse-overview'>
          <h3>Today's Weather</h3>
          <img src={cloudy} />
        </section>
      </main>
    </>
  );
}

export default Dashboard;