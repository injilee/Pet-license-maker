import React, { useState } from 'react';
import styles from '../../styles/edit_add_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image-file-input/imageFileInput';

const EditAddForm = () => {
  const [optionValue, setValue] = useState(null);

  const selectOption = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('hi');
  };

  return (
    <form className={styles.edit_form}>
      <input
        className={styles.edit_input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <select onChange={selectOption}>
        <option defaultValue="1">동물등록번호 없음</option>
        <option defaultValue="2">동물등록번호 있음</option>
      </select>

      {optionValue === '동물등록번호 있음' ? (
        <input className={styles.edit_input} type="text" name="petNumber" />
      ) : (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          placeholder="동물등록번호"
          disabled
        />
      )}
      <div className={styles.birth_gender_address}>
        <input
          className={styles.edit_input}
          type="text"
          name="birth"
          placeholder="생년월일"
        />
        <input
          className={styles.edit_input}
          type="text"
          name="gender"
          placeholder="성별(중성화여부)"
        />
        <input
          className={styles.edit_input}
          type="text"
          name="address"
          placeholder="주소"
        />
      </div>
      <textarea
        className={styles.edit_input}
        type="text"
        name="featurs"
        maxLength={65}
        placeholder="특징"
      ></textarea>

      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian1"
          placeholder="보호자 성함"
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum1"
          placeholder="보호자 전화번호"
        />
      </div>
      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian2"
          placeholder="보호자 성함"
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum2"
          placeholder="보호자 전화번호"
        />
      </div>
      <div className={styles.fileInput}>
        <ImageFileInput />
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditAddForm;
