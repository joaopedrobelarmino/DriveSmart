import React from 'react';
import styles from './Audi.module.css';
import image from '../../../Cars/Image/AUDI.jpg';
import { Link } from 'react-router-dom';

const AUDI = () => {
  return (
    <div className={styles.AUDI}>
      <div>
        <img src={image} />
      </div>
      <div>
        <h1>
          Experimente o luxo e o desempenho excepcionais de um Audi de aluguel.
        </h1>
        <p>
          Alugue um Audi e mergulhe na experiência de dirigir um dos veículos
          mais emblemáticos da indústria automobilística. Combinando elegância,
          inovação e desempenho de alto nível, nosso Audi de aluguel oferece uma
          viagem incomparável. Seja para uma escapadela de fim de semana ou uma
          viagem de negócios, permita-se desfrutar do conforto e da emoção que
          somente um Audi pode oferecer."
        </p>
        <Link to='/Termos'>
          <button>Alugar</button>
        </Link>
      </div>
    </div>
  );
};

export default AUDI;
