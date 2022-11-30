import React, { useRef, useState } from 'react';
import styles from '../../styles/imageFileInput.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
    setLoading(false);
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
      {!loading && (
        <button className={styles.imageBtn} onClick={onClick}>
          {name || 'No Image File'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </>
  );
};

export default ImageFileInput;
