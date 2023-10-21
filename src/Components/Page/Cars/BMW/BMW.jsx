import React from 'react';
import styles from './BMW.module.css';
import image from '../../../Cars/Image/BMW.jpg';
import { Link } from 'react-router-dom';

const AUDI = () => {
  return (
    <div className={styles.BMW}>
      <div>
        <img src={image} />
      </div>
      <div>
        <h1>Explore a Elegância e o Desempenho - BMW Série 5 para Alugar</h1>
        <p>
          Experimente a combinação perfeita entre luxo, tecnologia e desempenho
          com o nosso BMW Série 5 disponível para aluguel. Este veículo de
          prestígio é uma obra-prima da engenharia alemã, projetado para
          impressionar e entregar uma experiência de condução inigualável.
        </p>
        <Link to="/Termos">
          <button>Alugar</button>
        </Link>
      </div>
    </div>
  );
};

export default AUDI;
