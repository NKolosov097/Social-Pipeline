import React from 'react';
import { FriendList } from './FriendList';
import styles from './Friends.module.css';

export const Friends = () => {
  return (
    <section className={styles.wrapper__friends__menu}>
      <nav className={styles.friends__menu___inner}>
        <ul className={styles.friends__menu__list}>
          <li className={styles.friends__menu__item}>
            <FriendList
              title="Favorite Friends"
              friends={['Asap Rocky', 'Emelyanov Dmitry', 'Shirley Garcia', 'Scott Oliver']}
            />
          </li>
          <li className={styles.friends__menup__item}>
            <ul className={styles.friends__menu__link} href="true">
              <FriendList
                title="Friends Online"
                friends={['Harold Clark', 'Anna Taylor', 'John Hicks', 'Asap Rocky']}
              />
            </ul>
          </li>
          <li className={styles.friends__menu__item}>
            <ul className={styles.friends__menu__link} href="true">
              <FriendList
                title="Have been online recently"
                friends={['Harry Potter', 'Mark Nelson', 'James Gibson', 'Mary Bennett']}
              />
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
};
