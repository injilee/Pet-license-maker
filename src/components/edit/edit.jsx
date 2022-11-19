import React from 'react';
import styles from '../../styles/edit.module.css';
import EditForm from '../edit_form/edit_form';

const Edit = ({ card }) => {
  return (
    <section className={styles.edit_container}>
      <h2 className={styles.edit_title}>Make</h2>
      {card.map((card) => (
        <EditForm card={card} key={card.id} />
      ))}
    </section>
  );
};

export default Edit;
