import React from 'react';
import styles from '../../styles/card.module.css';

const Card = ({ card }) => {
  const DEFALUT_IMAGE = '/images/default_logo.png';
  const {
    name,
    petNumber,
    birth,
    address,
    gender,
    featurs,
    imageUrl,
    guardian1,
    guardianPhoneNum1,
    guardian2,
    guardianPhoneNum2,
  } = card;
  const url = imageUrl || DEFALUT_IMAGE;

  return (
    <section className={styles.preview_header}>
      <h2 className={styles.license_title}>반려동물등록증</h2>
      <div className={styles.license_content}>
        <div className={styles.photo_wrap}>
          <img src={url} alt="profile images" className={styles.photo} />
        </div>
        <ul className={styles.license_list}>
          <li>이름 : {name}</li>
          <li>동물등록번호 : {petNumber}</li>
          <li>생년원일 : {birth}</li>
          <li>주소 : {address}</li>
          <li>성별(중성화) : {gender}</li>
          <li>특징 : {featurs}</li>
        </ul>
      </div>
      <span className={styles.line}></span>
      <section className={styles.license_footer}>
        <ul className={styles.guardian_info}>
          <li className={styles.guardian_name}>보호자 : {guardian1}</li>
          <li className={styles.guardian_phone}>
            연락처 : {guardianPhoneNum1}
          </li>
        </ul>
        <ul className={styles.guardian_info}>
          <li className={styles.guardian_name}>보호자 : {guardian2}</li>
          <li className={styles.guardian_phone}>
            연락처 : {guardianPhoneNum2}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Card;
