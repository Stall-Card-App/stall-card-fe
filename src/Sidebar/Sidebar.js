import React from 'react';
import { NavLink } from 'react-router-dom'
import "./Sidebar.scss"
import MicroModal from 'micromodal';

function Sidebar({ updateCurrentPage }) {
  return ( 
    <aside className='sidebar-container'>
      <div className='placeholder-logo'>
        <img src="logo.svg" alt="logo"></img>
        <h1>Stall Card</h1>
      </div>
      <nav>
        <ul className='nav-items'>
          <li>
            <NavLink to="/" onClick={() => {updateCurrentPage('Dashboard')}}><img src="home.svg" alt="home icon"/>Home</NavLink>
          </li>
          <li>
            <NavLink to="/horses" onClick={() => {updateCurrentPage('All Horses')}}><img src="grid.svg" alt="grid icon"/>All Horses</NavLink>
          </li>
        </ul>
      </nav>

    </aside>
  );
}

export default Sidebar;