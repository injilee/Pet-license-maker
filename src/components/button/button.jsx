import React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({ name, onClick }) => {
  return (
    <button
      className={name === 'Add' ? `${styles.add}` : `${styles.delete}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
