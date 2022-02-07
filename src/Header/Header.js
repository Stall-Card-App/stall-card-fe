import React from 'react'
import './Header.scss'

function Header() {
    return(
        <header className='header-container'>
            <h1>Dashboard</h1>
            <p>Welcome, Admin</p>
            <span className='profile-container'>
                <img src="user.svg" />
                <p>Profile</p>
            </span>
        </header>
    )
}

export default Header;