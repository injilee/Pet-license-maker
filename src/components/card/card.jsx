import React from 'react';
import styles from '../../styles/card.module.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { createRef } from 'react';

const Card = ({ card }) => {
  const cardRef = createRef();
  const DEFALUT_IMAGE = '/images/default_logo.png';
  const {
    name,
    petNumber,
    birth,
    address,
    gender,
    featurs,
    fileUrl,
    guardian1,
    guardianPhoneNum1,
    guardian2,
    guardianPhoneNum2,
  } = card;
  const url = fileUrl || DEFALUT_IMAGE;

  const downloadCard = () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== 'BUTTON';
    };

    domtoimage
      .toBlob(card, { filter: filter })
      .then((blob) => saveAs(blob, `${name}_card.png`));
  };

  return (
    <div className={styles.card} ref={cardRef}>
      <section className={styles.preview_header}>
        <div className={styles.card_header}>
          <h2 className={styles.license_title}>반려동물등록증</h2>
          <button className={styles.downBtn} onClick={downloadCard}>
            <i
              className={`fa-solid fa-download ${styles.download_card}`}
              aria-label="download Pet License"
            ></i>
          </button>
        </div>
        <div className={styles.license_content}>
          <div className={styles.photo_wrap}>
            <img src={url} alt="profile images" className={styles.photo} />
          </div>
          <ul className={styles.license_list}>
            <li>이름 : {name}</li>
            {petNumber === '' ? '' : <li>동물등록번호 : {petNumber}</li>}
            <li>생년원일 : {birth}</li>
            <li>성별(중성화) : {gender}</li>
            <li>주소 : {address}</li>
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
    </div>
  );
};
export default Card;
