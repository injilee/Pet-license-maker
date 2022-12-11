import React, { createRef, useState } from 'react';
import styles from '../../styles/edit_form.module.css';
import Button from '../button/button';

const EditForm = ({ FileInput, card, updateCard, onDelete }) => {
  console.log('edit form');
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
  } = card;

  const nameRef = createRef();
  const petNumberRef = createRef();
  const birthRef = createRef();
  const addressRef = createRef();
  const genderRef = createRef();
  const featursRef = createRef();
  const guardian1Ref = createRef();
  const guardianPhoneNum1Ref = createRef();
  const guardian2Ref = createRef();
  const guardianPhoneNum2Ref = createRef();
  const petNumberOptionRef = createRef();

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
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
    const target = event.target;
    const value = target.value;
    if (target === null) {
      return;
    } else {
      const update = {
        ...card,
        [target.name]: value,
      };
      updateCard(update);
    }
  };

  return (
    <form className={styles.edit_form}>
      <input
        className={styles.edit_input}
        type="text"
        name="name"
        defaultValue={name}
        ref={nameRef}
        placeholder="Name"
        onChange={onChange}
      />
      <select
        onChange={(value) => selectOption(value.target.value)}
        ref={petNumberOptionRef}
      >
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
          ref={petNumberRef}
          onChange={onChange}
        />
      ) : (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          defaultValue={petNumber}
          placeholder="동물등록번호"
          ref={petNumberRef}
          disabled
          onChange={onChange}
        />
      )}
      <div className={styles.birth_gender}>
        <input
          className={`${styles.edit_input} ${styles.birth}`}
          type="text"
          name="birth"
          defaultValue={birth}
          ref={birthRef}
          placeholder="생년월일"
          onChange={onChange}
        />
        <input
          className={`${styles.edit_input} ${styles.gender}`}
          type="text"
          name="gender"
          defaultValue={gender}
          ref={genderRef}
          placeholder="성별(중성화여부)"
          onChange={onChange}
        />
      </div>
      <input
        className={styles.edit_input}
        type="text"
        name="address"
        defaultValue={address}
        ref={addressRef}
        maxLength={45}
        placeholder="주소"
        onChange={onChange}
      />
      <textarea
        className={styles.edit_input}
        type="text"
        name="featurs"
        maxLength={45}
        defaultValue={featurs}
        ref={featursRef}
        placeholder="특징(45자 이내)"
        onChange={onChange}
      ></textarea>

      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian1"
          defaultValue={guardian1}
          ref={guardian1Ref}
          placeholder="보호자 성함"
          onChange={onChange}
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum1"
          defaultValue={guardianPhoneNum1}
          ref={guardianPhoneNum1Ref}
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
          ref={guardian2Ref}
          placeholder="보호자 성함"
          onChange={onChange}
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum2"
          defaultValue={guardianPhoneNum2}
          ref={guardianPhoneNum2Ref}
          placeholder="보호자 전화번호"
          onChange={onChange}
        />
      </div>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} name={fileName} />
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditForm;
