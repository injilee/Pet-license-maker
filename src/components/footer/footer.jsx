import React from 'react';
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
  <>
  <div className={styles.email_login}>
    <label htmlFor='input' className={styles.email_label}>Email</label>
    <input type="email" className={styles.email_input} id='input' placeholder='inpet@email.com'/>
  </div>
  <div className={styles.password_warp}>
    <label htmlFor='password' className={styles.password_label}>비밀번호</label>
    <input type="password" className={styles.password} id='password' placeholder='password'/>
  </div>
  </>
  )
};
export default Footer;