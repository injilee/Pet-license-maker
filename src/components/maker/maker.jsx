import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import styles from '../../styles/maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import Edit from '../edit/edit';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

const Maker = ({ FileInput, authService, cardRepository, imageUploader }) => {
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [file, setFile] = useState({
    fileName: null,
    fileUrl: null,
    public_id: null,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.name;

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileUrl: file.url,
      public_id: file.public_id,
    });
  };

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    const syncCard = cardRepository.getCard(userId, (cards) => {
      setCards(cards);
    });

    if (!userId) {
      return;
    }

    return () => syncCard();
  }, [cardRepository, userId]);

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, navigate]);

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
    imageUploader.delete(file.public_id);
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
            onFileChange={onFileChange}
            file={file}
          />
          <Preview card={cards} />
        </div>
        <Footer onLogout={onLogout} user={user} />
      </section>
    </>
  );
};

export default Maker;
