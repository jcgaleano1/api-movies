import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <Link to='/' className='link'><h2 className='logo'>MOVIEMAKER</h2></Link>
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Movies</NavLink>
                        <NavLink to="/favs" >Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}