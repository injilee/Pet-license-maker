import React, { useEffect } from 'react';
import Header from '../header/header';
import styles from '../../styles/maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom/dist';

const Maker = ({ authService }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

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
      <Header onLogout={onLogout} />
      <section className={styles.maker_header}>
        {/* <h2 className={styles.license_title}>반려동물등록증</h2> */}
        <div className={styles.license_content}>
          <ul className={styles.license_list}>
            <li>이름 :</li>
            <li>동물등록번호 :</li>
            <li>생년원일 :</li>
            <li>주소 :</li>
            <li>중성화(성별) :</li>
            <li>특징 :</li>
          </ul>
        </div>
        <section className={styles.maker_footer}>
          <ul className={styles.guardian_info}>
            <li className={styles.guardian_name}>보호자 : 인펫</li>
            <li className={styles.guardian_phone}>연락처 : 010-2222-3333</li>
            <li className={styles.guardian_name}>보호자 : 인펫</li>
            <li className={styles.guardian_phone}>연락처 : 010-2222-3333</li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Maker;
