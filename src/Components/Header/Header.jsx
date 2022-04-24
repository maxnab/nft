import React from 'react';
import styles from './Header.module.scss'
import logo from '../../static/images/Auxpo.svg'
import purse from '../../static/images/purse.svg'

const Header = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.logo}><img src={logo} alt="Auxpo"/></div>
        <div>
          <div className={styles.menu}>
            <a href="#">Home</a>
            <a href="#">Roadmap</a>
            <a href="#">About us</a>
            <a href="#"><img src={purse} alt="purse"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;