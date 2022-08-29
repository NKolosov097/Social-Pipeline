import React from 'react';
import { Link } from 'react-router-dom';
import { SvgHeader } from './SvgHeader';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.header__inner}>
          <div className={styles.wrapper__header__logo}>
            <Link className={styles.header__logo__link} to="/counter">
              <span className={styles.header__logo__text}>Social Pipeline</span>
            </Link>
          </div>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__item}>
              <Link
                className={styles.header__nav__link}
                to="../../components/authentication/Login.jsx"
              >
                <SvgHeader id="addFriends" />
              </Link>
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
    </header>
  );
};
