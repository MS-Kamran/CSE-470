import React from 'react';
import styles from '../assets/styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>LOGO</h1>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="#about" className={styles.link}>About</a></li>
        <li className={styles.navItem}><a href="#contact" className={styles.link}>Contact Us</a></li>
        <li className={styles.navItem}><a href="#shop" className={styles.link}>Shop</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
