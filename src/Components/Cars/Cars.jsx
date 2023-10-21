import React from 'react';
import styles from './Cars.module.css';
import AUDI from './Image/AUDI.jpg';
import BMW from './Image/BMW.jpg';
import Ford from './Image/Ford.jpg';
import Lamborghini from './Image/Lamborghini.jpg';
import { Link } from 'react-router-dom';

const Cars = () => {
  return (
    <div className={styles.Cars}>
      <div>
        <h1>Nossos Carros</h1>
      </div>
      <div className={styles.CarsContainer}>
        <Link to='/AUDI'>
          <img src={AUDI}  />
        </Link>
        <Link to='/BMW'>
          <img src={BMW} />
        </Link>
        <Link to='/Lamborghini'>
          <img src={Lamborghini} />
        </Link>
      </div>
    </div>
  );
};

export default Cars;
