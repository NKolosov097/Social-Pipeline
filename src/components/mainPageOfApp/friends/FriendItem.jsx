import React from 'react';
import styles from './Friends.module.css';

export const FriendItem = (props) => {
  return (
    <li className={styles.favorite__friends__item}>
      <a className={styles.favorite__friends__link} href="true">
        <img src={props.avatar} alt="avatar" className={styles.favorite__friends__avatar} />
        <div className={styles.favorite__friends__full__name}>{props.fullName}</div>
      </a>
      <span className={styles.online__time}>
        {props.timeOnline || <span className={styles.status__online} />}
      </span>
    </li>
  );
};
