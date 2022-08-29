import React from 'react';
import styles from './LeftMenu.module.css';

export const LeftMenu = () => {
  return (
    <section className={styles.wrapper__menu}>
      <nav className={styles.menu__inner}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a className={styles.menu__link} href="true">
              {/* <img className={styles.menu__content__img} src="true" alt='icon' /> */}
              <span className={styles.menu__content__title}>Profile</span>
            </a>
          </li>
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
    </section>
  );
};
