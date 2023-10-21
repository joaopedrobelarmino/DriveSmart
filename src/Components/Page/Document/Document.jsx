import React from 'react';
import styles from './Document.module.css';
import Image from './Document.png';
import { Link } from 'react-router-dom';

const Document = () => {
  function handleClick() {
    alert('Imagens não serão mostradas pelo fato de ser uma página de estudos');
  }

  return (
    <div className={styles.DocumentContainer}>
      <div className={styles.Document}>
        <div>
          <img src={Image} />
        </div>
        <div>
          <h1>Precisamos de uma foto do seu documento</h1>
          <input onClick={handleClick} type="file" />
        </div>
      </div>
      <div>
        <Link to='/endereço'>
          <button>Proximo</button>
        </Link>
      </div>
    </div>
  );
};

export default Document;
