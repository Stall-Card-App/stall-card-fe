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
        
        <WeatherWidget />
        <Schedule />
        <Overview />
      </main>
    </>
  );
}

export default Dashboard;