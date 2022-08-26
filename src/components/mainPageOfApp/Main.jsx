import React from 'react';
import { SvgHeader } from './SvgHeader';
import styles from './Main.module.css';

import { Friend } from './friends/Friend';
import { Features } from './Features';
import { Description } from './Description';
import { FriendList } from './friends/FriendList';

export const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.container}>
            <nav className={styles.header__inner}>
              <div className={styles.wrapper__header__logo}>
                <a className={styles.header__logo__link} href="true">
                  <span className={styles.header__logo__text}>Social Pipeline</span>
                </a>
              </div>
              <ul className={styles.header__nav__list}>
                <li className={styles.header__nav__item}>
                  <a
                    className={styles.header__nav__link}
                    href="../../components/authentication/Login.jsx"
                  >
                    <SvgHeader id="addFriends" />
                  </a>
                </li>
                <li className={styles.header__nav__item}>
                  <a className={styles.header__nav__link} href="true">
                    <SvgHeader id="notifications" />
                  </a>
                </li>
                <li className={styles.header__nav__item}>
                  <a className={styles.header__nav__link} href="true">
                    <SvgHeader id="profile" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>{' '}
        {/* ./header */}
        <section className={styles.wrapper__menu}>
          <nav className={styles.menu__inner}>
            <a className={styles.menu__item} href="true">
              {' '}
              {/*className={styles.menu__profile}*/}
              <a className={styles.menu__link} href="true">
                <span className={styles.menu__content__title}>Profile</span>
              </a>
            </a>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
                  <span className={styles.menu__content__title}>Feed</span>
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
                  <span className={styles.menu__content__title}>Friends</span>
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
                  <span className={styles.menu__content__title}>Event</span>
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
                  <span className={styles.menu__content__title}>Videos</span>
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
                  <span className={styles.menu__content__title}>Photos</span>
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
                  <span className={styles.menu__content__title}>Music</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>{' '}
        {/* ./wrapper__menu */}
        <section className={styles.wrapper__main__area}>
          <div className={styles.header__main__area}>
            <div className={styles.wrapper__avatar}>
              <img src="true" alt="avatar" />
            </div>
            <div className={styles.main__header__info}>
              <div className={styles.main_header__fullname}>Kolosov Nikita</div>
              <Features age={'19'} post={'Student'} />
              <Description description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text" />
            </div>
          </div>
        </section>{' '}
        {/* ./wrapper__main__area */}
        <section className={styles.wrapper__friends__menu}>
          <nav className={styles.friends__menu___inner}>
            <ul className={styles.friends__menu__list}>
              <li className={styles.friends__menu__item}>
                <FriendList
                  title="Favorite Friends"
                  friends={['Kolosov Nikita', 'Emelyanov Dmitry', 'Shirley Garcia', 'Scott Oliver']}
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
        </section>{' '}
        {/* ./wrapper__friends__menu */}
      </div>
    </>
  );
};
