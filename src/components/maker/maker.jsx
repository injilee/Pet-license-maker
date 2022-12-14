import React, { useEffect, useState, useCallback, memo } from 'react';
import Header from '../header/header';
import styles from '../../styles/maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import Edit from '../edit/edit';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

const Maker = memo(
  ({ FileInput, authService, cardRepository, imageUploader }) => {
    const navigateState = useLocation().state;
    const [user, setUserName] = useState({});
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(navigateState && navigateState.id);
    const [file, setFile] = useState({
      fileName: null,
      fileUrl: null,
      public_id: null,
    });

    const navigate = useNavigate();

    const onFileChange = (file) => {
      setFile({
        fileName: file.name,
        fileUrl: file.url,
        public_id: file.public_id,
      });
    };

    const onLogout = useCallback(() => {
      authService.logout();
    }, [authService]);

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
          setUserName({
            email: user.email,
            displayName: user.displayName,
          });
        } else {
          navigate('/');
        }
      });
    }, [authService, navigate]);

    const addAndUpdateCard = useCallback(
      (update) => {
        const updated = { ...cards };
        updated[update.id] = update;
        setCards(updated);
        cardRepository.saveCard(userId, update);
      },
      [cardRepository, userId, cards],
    );

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
  },
);

export default Maker;
