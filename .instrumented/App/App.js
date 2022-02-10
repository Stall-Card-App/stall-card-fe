import { Routes, Route } from 'react-router-dom';
import AllHorses from '../AllHorses/AllHorses';
import Dashboard from '../Dashboard/Dashboard';
import HorseProfile from '../HorseProfile/HorseProfile';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './App.scss';

function App() {
  return (
    <main>
      <Sidebar />
      <section className='main-section'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/horses' element={<AllHorses />} />
          <Route path='/horses/:id' element={<HorseProfile />} />
        </Routes>
      </section>

    </main>

  );
}

export default App;