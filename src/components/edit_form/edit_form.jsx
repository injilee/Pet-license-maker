import React, { useState } from 'react';
import styles from '../../styles/edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image-file-input/imageFileInput';

const EditForm = ({ card }) => {
  const [optionValue, setValue] = useState(null);
  const {
    name,
    petNumber,
    birth,
    gender,
    address,
    featurs,
    imageUrl,
    guardian1,
    guardianPhoneNum1,
    guardian2,
    guardianPhoneNum2,
  } = card;

  const onSubmit = () => {};

  const selectOption = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <form className={styles.edit_form}>
      <input
        className={styles.edit_input}
        type="text"
        name="name"
        defaultValue={name}
        placeholder="Name"
      />
      <select onChange={selectOption}>
        <option defaultValue="1">동물등록번호 없음</option>
        <option defaultValue="2">동물등록번호 있음</option>
      </select>

      {optionValue === '동물등록번호 있음' ? (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          defaultValue={petNumber}
        />
      ) : (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          defaultValue={petNumber}
          placeholder="동물등록번호"
          disabled
        />
      )}
      <div className={styles.birth_gender_address}>
        <input
          className={styles.edit_input}
          type="text"
          name="birth"
          defaultValue={birth}
          placeholder="생년월일"
        />
        <input
          className={styles.edit_input}
          type="text"
          name="gender"
          defaultValue={gender}
          placeholder="성별(중성화여부)"
        />
        <input
          className={styles.edit_input}
          type="text"
          name="address"
          defaultValue={address}
          placeholder="주소"
        />
      </div>
      <textarea
        className={styles.edit_input}
        type="text"
        name="featurs"
        maxLength={65}
        defaultValue={featurs}
        placeholder="특징"
      ></textarea>

      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian1"
          defaultValue={guardian1}
          placeholder="보호자 성함"
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum1"
          defaultValue={guardianPhoneNum1}
          placeholder="보호자 전화번호"
        />
      </div>
      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian2"
          defaultValue={guardian2}
          placeholder="보호자 성함"
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum2"
          defaultValue={guardianPhoneNum2}
          placeholder="보호자 전화번호"
        />
      </div>
      <div className={styles.fileInput}>
        <ImageFileInput />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditForm;
