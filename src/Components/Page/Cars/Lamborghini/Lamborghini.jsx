import React from 'react';
import styles from './Lamborghini.module.css';
import image from '../../../Cars/Image/Lamborghini.jpg';
import { Link } from 'react-router-dom';

const AUDI = () => {
  return (
    <div className={styles.BMW}>
      <div>
        <img src={image} />
      </div>
      <div>
        <h1>
          Viva a adrenalina de dirigir uma Lamborghini de alta performance.
        </h1>
        <p>
          Deslize pelas ruas com elegância e potência incomparáveis em nosso
          Lamborghini de aluguel. Com linhas deslumbrantes, um motor roncando
          com fúria e um interior luxuoso, este é o carro dos sonhos de qualquer
          entusiasta de automóveis. Quando você aluga uma Lamborghini, está
          abrindo as portas para uma experiência única, onde cada acelerada é
          uma emoção e cada curva é uma obra de arte da engenharia italiana. Não
          é apenas uma viagem; é uma aventura de alto nível. Reserve agora e
          vivencie a magia da Lamborghini.
        </p>
        <Link to="/Termos">
          <button>Alugar</button>
        </Link>
      </div>
    </div>
  );
};

export default AUDI;
