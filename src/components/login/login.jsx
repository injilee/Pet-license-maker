import styles from '../../styles/login.module.css';
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({authService}) => {
  const onLogin = (event) => {
    console.log(event.currentTarget.textContent)
    authService.login(event.currentTarget.textContent) // 
    .then(console.log)
  }
  return (
    <>
    <Header />
    <div className={styles.login_container}>
      <strong className={styles.login}>Login</strong>
      <button onClick={onLogin} className={styles.btn_google}>Google</button>
      <button onClick={onLogin} className={styles.btn_github}>Github</button>
      <button onClick={onLogin} className={styles.btn_email}>email</button>
    </div>
    <Footer />
    </>
  );
};

export default Login;