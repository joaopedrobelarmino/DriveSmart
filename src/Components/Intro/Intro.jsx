import React from 'react';
import styles from './Intro.module.css';
import Image from '../Image/Logo.png';

const Intro = () => {
  return (
    <div className={styles.Intro}>
      <div>
        <h1>
          Bem vindo a <br /> DrivesSmart
        </h1>
        <p>
          A Escolha Inteligente para Alugar <font color="#5c90ae">Carros</font>
        </p>
      </div>
      <div>
        <img src={Image} width={350} />
      </div>
    </div>
  );
};

export default Intro;
