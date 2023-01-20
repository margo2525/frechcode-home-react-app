import React from 'react';
import styles from './UserCardBottom.module.scss';

const UserCardBottom = (props) => {
  const { name, lastName, login} = props;

  return (
      <div className={styles.wrapperItem}>
        <p className={styles.name}>{name} {lastName}</p>
        <p className={styles.login}>{login}</p>
      </div>
  );
}

export default UserCardBottom;