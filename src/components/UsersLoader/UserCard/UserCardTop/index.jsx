import React from 'react';
import styles from './UserCardTop.module.scss';

const UserCardTop = (props) => {
  const { picture } = props;

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={picture.large} 
        alt='user img' />
    </div>
  );
}

export default UserCardTop;
