import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.module.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/home">Explorar Pokémons</Link>
      <Link to="/create">Crear Pokémon</Link>
    </nav>
  );
}

export default Navbar;
