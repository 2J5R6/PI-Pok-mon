import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/home" className="navLink">Home</Link>
      <Link to="/favorites" className="navLink">Favorites</Link>
      <Link to="/create" className="navLink">Create Pokémon</Link>
    </nav>
  );
};

export default NavBar;
