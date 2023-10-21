import React from 'react';
import styles from './Header.module.css';
import Logo from '../Image/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>
        <img src={Logo} width={100} />
      </div>
      <nav>
        <ul>
          <Link to='/Carros'>
            <li>Carros</li>
          </Link>
          <Link to='/Termos'>
            <li>Termos</li>
          </Link>
          <Link to='/Contato'>
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
