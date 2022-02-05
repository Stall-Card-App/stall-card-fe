import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss';
import Schedule from '../Schedule/Schedule';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import Overview from '../Overview/Overview';
import Form from '../Form/Form';
import MicroModal from 'micromodal';

function Dashboard() {
  MicroModal.init();
  return (
    <>
      <main className='Dashboard'>
        <Form />
        <Sidebar className='flop' />
        <header>
          <button onClick={() => MicroModal.show('modal-1')}>
            New Horse
          </button>
        </header>
        <WeatherWidget />
        <Schedule />
        <Overview />
      </main>
    </>
  );
}

export default Dashboard;