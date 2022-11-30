import { Oval } from 'react-loader-spinner';
import styles from './loading.module.css';

function Loading() {
  return (
    <div className={styles.spinner}>
      <Oval
        color="#4fa94d"
        width={50}
        height={50}
        timeout={300}
        secondaryColor="#4fa94d"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loading;
