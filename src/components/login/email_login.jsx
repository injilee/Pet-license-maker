import React from 'react';
import { useState } from 'react';
import { createRef } from 'react';
import styles from '../../styles/email_login.module.css';

const EmailLogin = ({ authService }) => {
  const [userEmail, setEmail] = useState(null);
  const [userPassword, setPassword] = useState(null);

  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!#%&*])[A-Za-z\d@$!#%&*]{8,}$/;

  const emailRef = createRef();
  const emailSpan = createRef();
  const passwordRef = createRef();
  const passwordSpan = createRef();

  const onSendEmail = () => {
    const emailValue = emailRef.current.value;
    if (emailValue.match(emailRegex) === null) {
      alert('이메일을 입력하면 비밀번호를 재설정 할 수 있습니다.');
      emailRef.current.focus();
    } else {
      authService.resetPassword(emailValue);
    }
  };

  const onEmailCheck = () => {
    const emailValue = emailRef.current.value;
    if (emailValue.match(emailRegex) === null) {
      setEmail(null);
      return;
    } else {
      setEmail(emailValue);
    }
  };

  const onPasswordCheck = () => {
    const passwordValue = passwordRef.current.value;
    if (passwordValue.match(passwordRegex) === null) {
      setPassword(null);
      return;
    } else {
      setPassword(passwordValue);
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    authService.emailAndPasswordLogin(userEmail, userPassword);
  };

  const onLogin = (e) => {
    e.preventDefault();
    authService.emailSignIn(userEmail, userPassword);
  };

  return (
    <>
      <form className={styles.email_form}>
        <div className={styles.email_login}>
          <label htmlFor="input" className={styles.email_label}>
            Email
          </label>
          <input
            type="email"
            className={styles.email_input}
            id="input"
            ref={emailRef}
            onChange={onEmailCheck}
            placeholder="inpet@email.com"
          />
          <span
            ref={emailSpan}
            className={`${styles.email_span} ${
              userEmail === null ? '' : styles.hidden
            }`}
          >
            이메일 형식을 확인해주세요. 이메일이 기억나지 않는다면
            lij8016@gmail.com로 문의 주세요.
          </span>
        </div>
        <div className={styles.password_warp}>
          <label htmlFor="password" className={styles.password_label}>
            비밀번호
          </label>
          <input
            type="password"
            className={styles.password}
            id="password"
            ref={passwordRef}
            onChange={onPasswordCheck}
            placeholder="password"
          />
          <button
            type="button"
            className={styles.resetPassword}
            onClick={onSendEmail}
          >
            비밀번호 재설정
          </button>
          <span
            ref={passwordSpan}
            className={`${styles.password_span} ${
              userPassword === null ? '' : styles.hidden
            }`}
          >
            문자, 숫자, 특수문자(&#42;&#91;&#64;&#36;&#33;&#35;&#37;&#38;)를
            포함한 8자리 이상의 비밀번호를 입력해주세요.
          </span>
          <div className={styles.btn_warp}>
            <button
              type="submit"
              className={styles.email_signInBtn}
              onClick={signIn}
            >
              회원가입
            </button>
            <button
              type="submit"
              className={styles.email_loginBtn}
              onClick={onLogin}
            >
              login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default EmailLogin;
