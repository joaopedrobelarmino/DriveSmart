import React from 'react';
import styles from './Terms.module.css';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className={styles.Terms}>
      <div className={styles.TermsContain}>
        <div>
          <h1>
            Bem-vindo à ["DriveSmart"], a sua fonte confiável para aluguel de
            carros de qualidade. Antes de realizar uma reserva, recomendamos que
            leia atentamente os seguintes termos e condições para garantir uma
            experiência tranquila e satisfatória.
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <span>1. Reservas e Aluguel</span>1.1. Reservas: Ao fazer uma
              reserva em nosso site, você concorda em fornecer informações
              precisas e completas. Reservamo-nos o direito de recusar qualquer
              reserva.
            </li>
            <li>
              <span>1. Reservas e Aluguel</span>1.1. Reservas: Ao fazer uma
              reserva em nosso site, você concorda em fornecer informações
              precisas e completas. Reservamo-nos o direito de recusar qualquer
              reserva.
            </li>
            <li>
              <span>1. Reservas e Aluguel</span>1.1. Reservas: Ao fazer uma
              reserva em nosso site, você concorda em fornecer informações
              precisas e completas. Reservamo-nos o direito de recusar qualquer
              reserva.
            </li>
            <li>
              <span>1. Reservas e Aluguel</span>1.1. Reservas: Ao fazer uma
              reserva em nosso site, você concorda em fornecer informações
              precisas e completas. Reservamo-nos o direito de recusar qualquer
              reserva.
            </li>
          </ul>
          <div className={styles.temsButton}>
            <Link to='/Documento'>
              <input type="checkbox" />
            </Link>
            <p>Li e aceito os termos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
