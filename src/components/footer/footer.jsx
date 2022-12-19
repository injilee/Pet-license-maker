import React, { memo } from 'react';
import styles from '../../styles/footer.module.css';

const Footer = memo(({ onLogout, user }) => {
  return (
    <div className={styles.profile}>
      {onLogout && (
        <>
          <span className={styles.user}>
            Maker : {user.displayName === null ? user.email : user.displayName}
          </span>
          <button onClick={onLogout} className={styles.logout_btn}>
            Logout
          </button>
        </>
      )}
    </div>
  );
});
export default Footer;
