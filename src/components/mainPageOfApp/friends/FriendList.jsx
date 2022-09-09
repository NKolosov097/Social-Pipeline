import React from 'react';
import styles from './Friends.module.css';
import { FriendItem } from './FriendItem';

export const FriendList = ({ title, friends }) => {
  return (
    <ul className={styles.favorite__friends} href="true">
      {title}
      {friends.length > 0 &&
        friends.map((friend) => (
          <FriendItem
            key={friend.id}
            avatar={friends.avatar}
            fullname={friend.fullname}
            timeOnline="10 min"
          />
        ))}
    </ul>
  );
};
