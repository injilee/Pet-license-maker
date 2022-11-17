import styles from '../../styles/login.module.css';
import Header from '../header/header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import EmailLogin from './email_login';

const Login = ({ authService }) => {
  const [check, checked] = useState(null);
  const navigate = useNavigate();

  const goToMaker = (userId, userName) => {
    navigate('/maker', { state: { id: userId, name: userName } });
  };

  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    authService
      .login(event.currentTarget.textContent) //
      .then((result) => goToMaker(result.user.uid, result.user.displayName));
  };

  // 로그인 관련 상태가 변하면 콜백함수 호출
  useEffect(() => {
    authService.onAuthChanged((user) => {
      user && goToMaker(user.id);
    });
  });

  const onEmailLogin = (event) => {
    if (check === true) {
      checked(false);
    } else {
      checked(true);
    }
  };

  return (
    <>
      <section className={styles.header}>
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
          {check === true && <EmailLogin />}
        </div>
      </section>
    </>
  );
};

export default Login;
