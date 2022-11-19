import React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({ name, onClick }) => {
  return (
    <button className={styles.delete} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
