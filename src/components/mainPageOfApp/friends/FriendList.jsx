import React from 'react';
import styles from '../Main.module.css';
import { Friend } from './Friend';

export const FriendList = (props) => {
  return (
    <ul className={styles.favorite__friends} href="true">
      {props.title}
      {props.friends.length > 0 &&
        props.friends.map((friend) => <Friend fullName={friend} timeOnline="10 min" />)}
    </ul>
  );
};
