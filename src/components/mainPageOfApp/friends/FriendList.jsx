import React from 'react';
import styles from './Friends.module.css';
import { FriendItem } from './FriendItem';

export const FriendList = ({ title, friends }) => {
  return (
    <ul
      className={styles.favorite__friends}
      href="true"
      key={`${title}-${friends.forEach((friend) => friend)}`}
    >
      {title}
      {friends.length > 0 &&
        friends.map((friend) => <FriendItem fullName={friend} timeOnline="10 min" />)}
    </ul>
  );
};
