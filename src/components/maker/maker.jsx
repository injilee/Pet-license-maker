import React, { useEffect } from 'react';
import Header from '../header/header';
import styles from '../../styles/maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import Edit from '../edit/edit';
import Preview from '../preview/preview';
import Footer from '../footer/footer';
import Cards from '../data/cards';

const Maker = ({ authService }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = new Cards().state.cards;
  const user = location.state.name;

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  return (
    <>
      <section className={styles.maker}>
        <Header />
        <div className={styles.make_warp}>
          <Edit card={card} />
          <Preview card={card} />
        </div>
        <Footer onLogout={onLogout} user={user} />
      </section>
    </>
  );
};

export default Maker;
