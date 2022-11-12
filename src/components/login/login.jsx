import styles from '../../styles/login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = ({authService}) => {
  const [check, checked] = useState(null);
  
  const onLogin = (event) => {
    console.log(event.currentTarget.textContent)
    authService.login(event.currentTarget.textContent) // 
    .then(console.log).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    })
  }

  const onEmailLogin = (event) => {
    if(check === true){
      checked(false);
    } else {
      checked(true);
    }
  } 

  return (
    <>
    <Header />
    <div className={styles.login_container}>
      <strong className={styles.login}>Login</strong>
      <button onClick={onLogin} className={styles.btn_google}>Google</button>
      <button onClick={onLogin} className={styles.btn_github}>Github</button>
      <button onClick={onEmailLogin} className={check === true ? `${styles.btn_email} ${styles.checked}` : `${styles.btn_email}`}>Email</button>
      {check === true && <Footer />}
    </div>
    </>
  );
};

export default Login;