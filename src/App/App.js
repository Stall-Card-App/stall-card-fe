import { Routes, Route } from 'react-router-dom';
import AllHorses from '../AllHorses/AllHorses';
import Dashboard from '../Dashboard/Dashboard';
import HorseProfile from '../HorseProfile/HorseProfile';
import './App.scss';

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/horses' element={<AllHorses />} />
        <Route path='/horses/:id' element={<HorseProfile />} />
      </Routes>
    </main>
  );
}

export default App;