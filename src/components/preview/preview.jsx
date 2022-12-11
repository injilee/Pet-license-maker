import React from 'react';
import styles from '../../styles/preview.module.css';
import Card from '../card/card';

const Preview = ({ card }) => {
  console.log('preview');
  return (
    <section className={styles.preview_container}>
      <h2 className={styles.preview_title}>Preview</h2>
      {Object.keys(card).map((key) => (
        <Card card={card[key]} key={key} />
      ))}
    </section>
  );
};

export default Preview;
