import React from 'react';
import styles from '../../styles/preview.module.css';

const Preview = ({ card }) => {
  return (
    <section className={styles.preview_container}>
      <h2 className={styles.preview_title}>Preview</h2>
      <section className={styles.preview_header}>
        {/* <h2 className={styles.license_title}>반려동물등록증</h2> */}
        <div className={styles.license_content}>
          <div className={styles.photo_wrap}>
            <img
              src="/images/default_logo.png"
              alt="profile images"
              className={styles.photo}
            />
          </div>
          <ul className={styles.license_list}>
            <li>이름 : {card[0].name}</li>
            <li>동물등록번호 : {card[0].petNumber}</li>
            <li>생년원일 : {card[0].birth}</li>
            <li>주소 : {card[0].address}</li>
            <li>성별(중성화) : {card[0].gender}</li>
            <li>특징 : {card[0].featurs}</li>
          </ul>
        </div>
        <span className={styles.line}></span>
        <section className={styles.license_footer}>
          <ul className={styles.guardian_info}>
            <li className={styles.guardian_name}>
              보호자 : {card[0].guardian1}
            </li>
            <li className={styles.guardian_phone}>
              연락처 : {card[0].guardianPhoneNum1}
            </li>
          </ul>
          <ul className={styles.guardian_info}>
            <li className={styles.guardian_name}>
              보호자 : {card[0].guardian2}
            </li>
            <li className={styles.guardian_phone}>
              연락처 : {card[0].guardianPhoneNum2}
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Preview;
