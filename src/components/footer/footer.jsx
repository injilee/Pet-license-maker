import React from 'react';
import styles from '../../styles/footer.module.css';

const Footer = ({ onLogout, user }) => {
  return (
    <div className={styles.profile}>
      {onLogout && (
        <>
          <span className={styles.userName}>Maker : {user}</span>
          <button onClick={onLogout} className={styles.logout_btn}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};
export default Footer;
