import React from 'react';
import styles from '../../styles/edit.module.css';
import EditAddForm from '../edit_add_form/edit_add_form';
import EditForm from '../edit_form/edit_form';

const Edit = ({ card, addCard }) => {
  return (
    <section className={styles.edit_container}>
      <h2 className={styles.edit_title}>Make</h2>
      {card.map((card) => (
        <EditForm card={card} key={card.id} />
      ))}
      <EditAddForm addCard={addCard} />
    </section>
  );
};

export default Edit;
