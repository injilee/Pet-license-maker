import styles from '../../styles/header.module.css';
import React, { memo } from 'react';

const Header = memo(() => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Pet License Maker</h1>
      </div>
    </>
  );
});

export default Header;
