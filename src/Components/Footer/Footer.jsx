import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Image/Logo.png';

const Footer = () => {
  return (
    <footer>
      <div className={styles.Footer}>
        <div>
          <img src={Logo} width={100} />
        </div>
        <div>
          <ul>
            <li>Contato</li>
            <li>Carros</li>
            <li>Condições</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
