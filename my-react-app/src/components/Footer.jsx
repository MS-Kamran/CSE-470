import React from 'react';
import styles from '../assets/styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2024 Bakery Shop. All rights reserved.</p>
      <ul className={styles.links}>
        <li><a href="#privacy" className={styles.link}>Privacy Policy</a></li>
        <li><a href="#terms" className={styles.link}>Terms of Service</a></li>
        <li><a href="#contact" className={styles.link}>Contact Us</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
