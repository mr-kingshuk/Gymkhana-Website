import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.image}>
        <img src="/gymkhana-logo.png" alt="" />
      </div>
      <ul className={styles.list}>
        <li>
          <a href="">Fests</a>
        </li>
        <li>
          <a href="">Councils</a>
        </li>
        <li>
          <a href="">Bus Schedule</a>
        </li>
        <li>
          <a href="">Mess Schedule</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;