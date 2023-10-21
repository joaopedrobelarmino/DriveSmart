import React from 'react';
import styles from './Address.module.css';
import Image from './Local.png'

const Address = () => {
  return (
    <div className={styles.Local}>
      <div>
        <img src={Image} />
      </div>
      <div>
        <h1>Rua dos carros, 42, Leblon</h1>
        <p>Rio de Janeiro</p>
      </div>
    </div>
  );
};

export default Address;
