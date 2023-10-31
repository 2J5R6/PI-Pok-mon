import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ModeToggle from '../ModeToggle/ModeToggle';
import './Navbar.module.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Inicio
        </Link>
        <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
          Explorar Pokémons
        </Link>
        <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>
          Crear Pokémon
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
