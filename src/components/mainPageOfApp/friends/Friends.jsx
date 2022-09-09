import React from 'react';
import { FriendList } from './FriendList';
import styles from './Friends.module.css';

import asap_rocky from '../../../images/avatars/AsapRocky.jpg';
import emelyanov_dmitry from '../../../images/avatars/EmelyanovDmitry.jpg';

export const Friends = () => {
  const favoriteFriends = [
    {
      id: 1,
      fullname: 'Asap Rocky',
      avatar: asap_rocky,
    },
    {
      id: 2,
      fullname: 'Emelyanov Dmitry',
      avatar: emelyanov_dmitry,
    },
    {
      id: 3,
      fullname: 'Shirley Garcia',
      avatar: asap_rocky,
    },
    {
      id: 4,
      fullname: 'Scott Oliver',
      avatar: asap_rocky,
    },
  ];

  const friendsOnline = [
    {
      id: 5,
      fullname: 'Harold Clark',
    },
    {
      id: 6,
      fullname: 'Anna Taylor',
    },
    {
      id: 7,
      fullname: 'John Hicks',
    },
    {
      id: 8,
      fullname: 'Travis Scott',
    },
  ];

  const recentlyOnline = [
    {
      id: 9,
      fullname: 'Harry Potter',
    },
    {
      id: 2,
      fullname: 'Mark Nelson',
    },
    {
      id: 3,
      fullname: 'James Gibson',
    },
    {
      id: 4,
      fullname: 'Mary Bennett',
    },
  ];

  return (
    <section className={styles.wrapper__friends__menu}>
      <nav className={styles.friends__menu___inner}>
        <ul className={styles.friends__menu__list}>
          <li className={styles.friends__menu__item}>
            <FriendList title="Favorite Friends" friends={favoriteFriends} />
          </li>
          <li className={styles.friends__menup__item}>
            <ul className={styles.friends__menu__link} href="true">
              <FriendList title="Friends Online" friends={friendsOnline} />
            </ul>
          </li>
          <li className={styles.friends__menu__item}>
            <ul className={styles.friends__menu__link} href="true">
              <FriendList title="Have been online recently" friends={recentlyOnline} />
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
};
