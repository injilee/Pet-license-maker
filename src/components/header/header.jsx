import styles from '../../styles/header.module.css';

function Header({ onLogout }) {
  return (
    <>
      <h1 className={styles.title}>Pet License Maker</h1>
      <div className={styles.profile}>
        {onLogout && (
          <button onClick={onLogout} className={styles.logout_btn}>
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default Header;
