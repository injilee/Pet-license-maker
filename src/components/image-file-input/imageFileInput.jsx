import React, { useRef } from 'react';
import styles from '../../styles/imageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.input}
        name="file"
        onChange={onChange}
      />
      <button className={styles.imageBtn} onClick={onClick}>
        {name || 'No Image File'}
      </button>
    </>
  );
};

export default ImageFileInput;
