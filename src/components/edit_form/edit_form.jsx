import React, { useState } from 'react';
import styles from '../../styles/edit_form.module.css';
import Button from '../button/button';

const EditForm = ({ FileInput, card, updateCard, onDelete }) => {
  const [optionValue, setValue] = useState(null);
  const {
    name,
    petNumber,
    birth,
    gender,
    address,
    featurs,
    guardian1,
    guardianPhoneNum1,
    guardian2,
    guardianPhoneNum2,
    fileName,
    fileUrl,
  } = card;

  const onFileChange = (file) => {
    console.log(file);
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
    console.log(card);
  };

  const onSubmit = () => {
    onDelete(card);
  };

  const selectOption = (selectValue) => {
    switch (selectValue) {
      case '0':
        return setValue('');

      case 'false':
        return setValue('');

      case 'true':
        return setValue(selectValue);

      default:
        throw new Error(`not supported provider: ${selectValue}`);
    }
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }

    const update = {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    updateCard(update);
  };

  return (
    <form className={styles.edit_form}>
      <input
        className={styles.edit_input}
        type="text"
        name="name"
        defaultValue={name}
        placeholder="Name"
        onChange={onChange}
      />
      <select onChange={(value) => selectOption(value.target.value)}>
        <option value="0">동물등록번호 여부</option>
        <option value="false">없음</option>
        <option value="true">있음</option>
      </select>

      {optionValue === 'true' ? (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          defaultValue={petNumber}
          onChange={onChange}
        />
      ) : (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          defaultValue={petNumber}
          placeholder="동물등록번호"
          disabled
          onChange={onChange}
        />
      )}
      <div className={styles.birth_gender_address}>
        <input
          className={styles.edit_input}
          type="text"
          name="birth"
          defaultValue={birth}
          placeholder="생년월일"
          onChange={onChange}
        />
        <input
          className={styles.edit_input}
          type="text"
          name="gender"
          defaultValue={gender}
          placeholder="성별(중성화여부)"
          onChange={onChange}
        />
        <input
          className={styles.edit_input}
          type="text"
          name="address"
          defaultValue={address}
          placeholder="주소"
          onChange={onChange}
        />
      </div>
      <textarea
        className={styles.edit_input}
        type="text"
        name="featurs"
        maxLength={65}
        defaultValue={featurs}
        placeholder="특징"
        onChange={onChange}
      ></textarea>

      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian1"
          defaultValue={guardian1}
          placeholder="보호자 성함"
          onChange={onChange}
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum1"
          defaultValue={guardianPhoneNum1}
          placeholder="보호자 전화번호"
          onChange={onChange}
        />
      </div>
      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian2"
          defaultValue={guardian2}
          placeholder="보호자 성함"
          onChange={onChange}
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum2"
          defaultValue={guardianPhoneNum2}
          placeholder="보호자 전화번호"
          onChange={onChange}
        />
      </div>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={name} />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditForm;
