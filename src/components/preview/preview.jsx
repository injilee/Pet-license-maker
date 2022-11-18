import React from 'react';
import styles from '../../styles/preview.module.css';
import Card from '../card/card';

const Preview = ({ card }) => {
  return (
    <section className={styles.preview_container}>
      <h2 className={styles.preview_title}>Preview</h2>
      {card.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </section>
  );
};

export default Preview;
