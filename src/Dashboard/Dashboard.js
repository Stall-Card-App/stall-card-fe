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
          <button className='new-horse-button' onClick={() => MicroModal.show('modal-1')}>
            <i className="fas fa-plus"></i>
          </button>
        <WeatherWidget />
        <Schedule />
        <Overview />
      </main>
    </>
  );
}

export default Dashboard;