import React from 'react';
import { NavLink } from 'react-router-dom'
import "./Sidebar.scss"

function Sidebar() {
  return ( 
    <aside className='sidebar-container'>
      <div className='placeholder-logo'>
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul className='nav-items'>
          <li>
            <NavLink to="/"><img src="home.svg" alt="home icon"/>Home</NavLink>
          </li>
          <li>
            <NavLink to="/"><img src="grid.svg" alt="grid icon"/>All Horses</NavLink>
          </li>
          <li>
            <NavLink to="/"><img src="calendar.svg" alt="home icon"/>Schedule</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;