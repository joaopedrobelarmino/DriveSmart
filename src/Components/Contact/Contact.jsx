import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div>
        <p>RESPOSTAS EM ATÉ 24H</p>
        <h1>Contato.</h1>
      </div>
      <div>
        <form>
          <div>
            <label>Digite seu nome</label>
            <input type="text" placeholder="ex:João" />
          </div>
          <div>
            <label>Digite seu email</label>
            <input type="email" placeholder="ex:João@email" />
          </div>
          <div>
            <label>Digite sua mensagem</label>
            <textarea placeholder="Digite aqui sua mensagem." />
            <input type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
