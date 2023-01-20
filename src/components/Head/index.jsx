import React from 'react';
import styles from './Head.module.scss';

const Head = (props) => {
  const { prevPage, nextPage } = props;
  return (
  <div className={styles.headWrap}>
    <h2 className={styles.title}>USERS LOADER</h2>
    <nav className={styles.nav}>
      <button 
        className={styles.btn}
        onClick={prevPage}>{"< Previous"}
      </button>
      <button 
        className={styles.btn}
        onClick={nextPage}>{"Next >"}
      </button>
    </nav>
  </div>
  );
}

export default Head;