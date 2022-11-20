import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import styles from '../../styles/maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import Edit from '../edit/edit';
import Preview from '../preview/preview';
import Footer from '../footer/footer';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: '먼지',
      petNumber: 153435,
      birth: '2014년 05월 12일',
      address: '서울특별시 관악구',
      gender: '여아(중성화)',
      featurs: '코리안 숏헤어 + 아메리칸 숏헤어(믹스)',
      imageUrl: null,
      guardian1: '이인지',
      guardianPhoneNum1: '010-2610-1667',
      guardian2: '이인지',
      guardianPhoneNum2: '010-2610-1667',
    },
    {
      id: 2,
      name: '요미',
      petNumber: 476487,
      birth: '2020년',
      address: '경기도 성남시',
      gender: '남아(중성화)',
      featurs: '치즈 코리안 숏헤어',
      imageUrl: null,
      guardian1: '이인지',
      guardianPhoneNum1: '010-2610-1667',
      guardian2: '이인지',
      guardianPhoneNum2: '010-2610-1667',
    },
  ]);

  const location = useLocation();
  const navigate = useNavigate();
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

  const addCard = (cardUpdate) => {
    const updateState = [...cards, cardUpdate];
    setCards(updateState);
    console.log(updateState);
  };

  return (
    <>
      <section className={styles.maker}>
        <Header />
        <div className={styles.make_warp}>
          <Edit card={cards} addCard={addCard} />
          <Preview card={cards} addCard={addCard} />
        </div>
        <Footer onLogout={onLogout} user={user} />
      </section>
    </>
  );
};

export default Maker;
