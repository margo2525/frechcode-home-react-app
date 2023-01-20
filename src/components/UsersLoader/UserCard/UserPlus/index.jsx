import React from 'react';
import cx from 'classnames';
import styles from './UserPlus.module.scss';

const { wrapperCardBtn, userBtn, userBtnMale, userBtnFemale} = styles;

const UserPlus = (props) => {
  const { gender } = props;
  const btnStyles = cx(userBtn, {
    [userBtnMale] : gender==='male',
    [userBtnFemale] : gender==='female',
    });

  return (
    <div className={wrapperCardBtn}>
      <button className={btnStyles}>
        +
      </button>
    </div>
  );
}

export default UserPlus;