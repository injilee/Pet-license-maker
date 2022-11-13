import styles from '../../styles/login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';

const Login = ({ authService }) => {
  const [check, checked] = useState(null);
  const navigate = useNavigate();

  const goToMaker = (userId) => {
    navigate('/maker', { state: { id: userId } });
  };

  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    authService
      .login(event.currentTarget.textContent) //
      .then((result) => goToMaker(result.user.uid));
  };

  const onEmailLogin = (event) => {
    if (check === true) {
      checked(false);
    } else {
      checked(true);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.login_container}>
        <strong className={styles.login}>Login</strong>
        <button onClick={onLogin} className={styles.btn_google}>
          Google
        </button>
        <button onClick={onLogin} className={styles.btn_github}>
          Github
        </button>
        <button
          onClick={onEmailLogin}
          className={
            check === true
              ? `${styles.btn_email} ${styles.checked}`
              : `${styles.btn_email}`
          }
        >
          Email
        </button>
        {check === true && <Footer />}
      </div>
    </>
  );
};

export default Login;
