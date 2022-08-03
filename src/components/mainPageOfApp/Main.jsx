import React from 'react';
import { SvgLogo } from './SvgLogo';
import styles from './Main.module.css';

export function Main() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.header__inner}>
            <div className={styles.wrapper__header__logo}>
              <a className={styles.header__logo__img} href>
                <SvgLogo id="logo" />
                <span className={styles.header__logo__text}> Social Pipeline</span>
              </a>
            </div>
            <ul className={styles.header__nav__list}>
              <li className={styles.header__nav__item}>
                <a
                  className={styles.header__nav__link}
                  href="../../components/authentication/Login.jsx"
                >
                  1
                </a>
                <a className={styles.header__nav__link} href="true">
                  2
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
