import React from 'react'
import './Header.scss'

function Header({ currentPage }) {
    return(
        <header className='header-container'>
            <h1>{currentPage}</h1>
            <p className="welcome-msg">Welcome, Admin</p>
            <span className='profile-container'>
                <img src="user.svg" />
                <p>Profile</p>
            </span>
        </header>
    )
}

export default Header;