import { React, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllHorses from '../AllHorses/AllHorses';
import Dashboard from '../Dashboard/Dashboard';
import HorseProfile from '../HorseProfile/HorseProfile';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import MobileNav from '../MobileNav/MobileNav';
import { useMediaQuery } from 'react-responsive';

import './App.scss';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [currentPage, setCurrentPage] = useState('Dashboard');
  
  const updateCurrentPage = (str) => {
    setCurrentPage(str);
  }

  return (
    <main>
      {isTabletOrMobile ? '' : <Sidebar updateCurrentPage={updateCurrentPage}/>}
      <section className='main-section'>
      {isTabletOrMobile ? <MobileNav updateCurrentPage={updateCurrentPage} /> : <Header />}
      {isTabletOrMobile && <h1 className="page-title">{currentPage}</h1>}
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