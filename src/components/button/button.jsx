import React from 'react';
import { memo } from 'react';
import styles from '../../styles/button.module.css';

const Button = memo(({ name, onClick }) => {
  return (
    <button
      type="button"
      className={name === 'Add' ? `${styles.add}` : `${styles.delete}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
});

export default Button;
