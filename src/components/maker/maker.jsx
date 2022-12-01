import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import styles from '../../styles/maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import Edit from '../edit/edit';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.name;

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });

  const addAndUpdateCard = (update) => {
    const updated = { ...cards };
    updated[update.id] = update;
    setCards(updated);
    cardRepository.saveCard(userId, update);
  };

  const onDelete = (update) => {
    const updated = { ...cards };
    delete updated[update.id];
    setCards(updated);
    cardRepository.removeCard(userId, update);
  };

  return (
    <>
      <section className={styles.maker}>
        <Header />
        <div className={styles.make_warp}>
          <Edit
            FileInput={FileInput}
            card={cards}
            addCard={addAndUpdateCard}
            updateCard={addAndUpdateCard}
            onDelete={onDelete}
          />
          <Preview card={cards} />
        </div>
        <Footer onLogout={onLogout} user={user} />
      </section>
    </>
  );
};

export default Maker;
