import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Inicio</Link>
      <Link to="/home" className={styles.link}>Explorar Pokémons</Link>
      <Link to="/create" className={styles.link}>Crear Pokémon</Link>
      {/* Puedes agregar más enlaces según sea necesario */}
    </nav>
  );
}

export default Navbar;
