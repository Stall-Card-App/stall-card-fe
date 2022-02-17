import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./MobileNav.scss";

function MobileNav({ updateCurrentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="mobile-nav-container">
            <div className="mobile-nav-content">
                <div className='placeholder-logo mobile-logo'>
                    <img src="logo.svg" alt="logo"></img>
                    <h1>Stall Card</h1>
                </div>
                {isOpen ? 
                    <button className="menu-button" onClick={() => {setIsOpen(false)}}>
                        <img src="x.svg" alt="x icon" />
                    </button> : 
                    <button className="menu-button" onClick={() => {setIsOpen(true)}}>
                        <img src="menu.svg" alt="menu icon" />
                    </button>}
            </div>
            {isOpen ? 
                <ul className='mobile-nav-items'>
                    <li>
                        <NavLink to="/" onClick={() => {updateCurrentPage('Dashboard')}}><img src="home.svg" alt="home icon"/>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/horses" onClick={() => {updateCurrentPage('All Horses')}}><img src="grid.svg" alt="grid icon"/>All Horses</NavLink>
                    </li>
                </ul>
                : null
            }
        </nav>
    )
}

export default MobileNav;