import React from 'react';
import styles from './Friends.module.css';

export const FriendItem = ({ avatar, fullname, timeOnline }) => {
  return (
    <li className={styles.favorite__friends__item}>
      <a className={styles.favorite__friends__link} href="true">
        <img className={styles.favorite__friends__avatar} src={avatar} alt="avatar" />
        <div className={styles.favorite__friends__full__name}>{fullname}</div>
      </a>
      <span className={styles.online__time}>
        {timeOnline || <span className={styles.status__online} />}
      </span>
    </li>
  );
};
