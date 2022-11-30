import React from 'react';
import styles from '../../styles/edit.module.css';
import EditAddForm from '../edit_add_form/edit_add_form';
import EditForm from '../edit_form/edit_form';

const Edit = ({ FileInput, card, addCard, updateCard, onDelete }) => {
  return (
    <section className={styles.edit_container}>
      <h2 className={styles.edit_title}>Make</h2>
      {Object.keys(card).map((key) => (
        <EditForm
          key={key}
          FileInput={FileInput}
          card={card[key]}
          updateCard={updateCard}
          onDelete={onDelete}
        />
      ))}
      <EditAddForm addCard={addCard} FileInput={FileInput} />
    </section>
  );
};

export default Edit;
