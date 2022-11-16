import React from 'react';
import styles from '../../styles/footer.module.css';

const Footer = ({ onLogout }) => {
  return (
    <div className={styles.profile}>
      {onLogout && (
        <button onClick={onLogout} className={styles.logout_btn}>
          Logout
        </button>
      )}
    </div>
  );
};
export default Footer;
