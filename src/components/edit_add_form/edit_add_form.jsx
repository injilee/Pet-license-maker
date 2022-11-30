import React, { createRef, useState } from 'react';
import styles from '../../styles/edit_add_form.module.css';
import Button from '../button/button';

const EditAddForm = ({ FileInput, addCard }) => {
  const [optionValue, setValue] = useState('');
  const [file, setFile] = useState({ fileName: null, fileUrl: null });

  const formRef = createRef();
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

  const selectOption = (selectValue) => {
    switch (selectValue) {
      case '0':
        return '';

      case 'false':
        return '';

      case 'true':
        return setValue(selectValue);

      default:
        throw new Error(`not supported provider: ${selectValue}`);
    }
  };

  const onFileChange = (file) => {
    setFile({ fileName: file.name, fileUrl: file.url });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      petNumber: petNumberRef.current.value || '',
      birth: birthRef.current.value || '',
      gender: addressRef.current.value || '',
      address: genderRef.current.value || '',
      featurs: featursRef.current.value || '',
      guardian1: guardian1Ref.current.value || '',
      guardianPhoneNum1: guardianPhoneNum1Ref.current.value || '',
      guardian2: guardian2Ref.current.value || '',
      guardianPhoneNum2: guardianPhoneNum2Ref.current.value || '',
      fileName: file.fileName || '',
      fileUrl: file.fileUrl || '',
    };

    formRef.current.reset();
    setValue(null);
    addCard(card);
  };

  return (
    <form ref={formRef} className={styles.edit_form}>
      <input
        className={styles.edit_input}
        type="text"
        name="name"
        ref={nameRef}
        placeholder="Name"
      />
      <select
        onChange={(value) => selectOption(value.target.value)}
        ref={petNumberOptionRef}
        defaultValue="petNumer"
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
          ref={petNumberRef}
        />
      ) : (
        <input
          className={styles.edit_input}
          type="text"
          name="petNumber"
          placeholder="동물등록번호"
          ref={petNumberRef}
          disabled
        />
      )}
      <div className={styles.birth_gender_address}>
        <input
          className={styles.edit_input}
          type="text"
          name="birth"
          ref={birthRef}
          placeholder="생년월일"
        />
        <input
          className={styles.edit_input}
          type="text"
          name="gender"
          ref={addressRef}
          placeholder="성별(중성화여부)"
        />
        <input
          className={styles.edit_input}
          type="text"
          name="address"
          ref={genderRef}
          placeholder="주소"
        />
      </div>
      <textarea
        className={styles.edit_input}
        type="text"
        name="featurs"
        maxLength={65}
        ref={featursRef}
        placeholder="특징"
      ></textarea>

      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian1"
          ref={guardian1Ref}
          placeholder="보호자 성함"
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum1"
          ref={guardianPhoneNum1Ref}
          placeholder="보호자 전화번호"
        />
      </div>
      <div className={styles.guardian_wrap}>
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardian2"
          ref={guardian2Ref}
          placeholder="보호자 성함"
        />
        <input
          className={styles.edit_guardian_input}
          type="text"
          name="guardianPhoneNum2"
          ref={guardianPhoneNum2Ref}
          placeholder="보호자 전화번호"
        />
      </div>
      <div className={styles.fileInput}>
        <FileInput onFileChange={onFileChange} />
        <Button name="Add" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditAddForm;
