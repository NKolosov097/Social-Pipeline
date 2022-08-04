import React from 'react';
import { SvgHeader } from './SvgHeader';
import styles from './Main.module.css';

export const Main = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.header__inner}>
            <div className={styles.wrapper__header__logo}>
              <a className={styles.header__logo__link} href="true">
                <div className={styles.header__logo__img}>
                  <SvgHeader id="logo" />
                </div>
                <span className={styles.header__logo__text}> Social Pipeline</span>
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
      </header>

      <section className={styles.container}>
        <div className={styles.wrapper__menu}>
          <nav className={styles.menu__inner}>
            <a className={styles.menu__profile} href="true">
              Profile
            </a>
            <ul className={styles.menu__list}>
              <li className={styles.nmenu__item}>
                <a className={styles.menu__link} href="true">
                  Feed
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  Friends
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  Event
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  Videos
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  Photos
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="true">
                  Music
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.wrapper__friends__menu}>
          <nav className={styles.friends__menu___inner}>
            <ul className={styles.friends__menu__list}>
              <li className={styles.friends__menup__item}>
                <ul className={styles.favorite__friends} href="true">
                  Favorite Friends
                  <li className={styles.favorite__friends__item}>
                    <a className={styles.favorite__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.favorite__friends__avatar} />
                      <div className={styles.favorite__friends__full__name}>Kolosov Nikita</div>
                    </a>
                  </li>
                  <li className={styles.favorite__friends__item}>
                    <a className={styles.favorite__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.favorite__friends__avatar} />
                      <div className={styles.favorite__friends__full__name}>Emelyanov Dmitry</div>
                    </a>
                  </li>
                  <li className={styles.favorite__friends__item}>
                    <a className={styles.favorite__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.favorite__friends__avatar} />
                      <div className={styles.favorite__friends__full__name}>Shirley Garcia</div>
                    </a>
                  </li>
                  <li className={styles.favorite__friends__item}>
                    <a className={styles.favorite__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.favorite__friends__avatar} />
                      <div className={styles.favorite__friends__full__name}>Scott Oliver</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.friends__menup__item}>
                <ul className={styles.friends__menu__link} href="true">
                  Friends Online
                  <li className={styles.online__friends__item}>
                    <a className={styles.online__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.online__friends__avatar} />
                      <div className={styles.online__friends__full__name}>Harold Clark</div>
                    </a>
                  </li>
                  <li className={styles.online__friends__item}>
                    <a className={styles.online__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.online__friends__avatar} />
                      <div className={styles.online__friends__full__name}>Jennifer Ortiz</div>
                    </a>
                  </li>
                  <li className={styles.online__friends__item}>
                    <a className={styles.online__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.online__friends__avatar} />
                      <div className={styles.online__friends__full__name}>Anna Taylor</div>
                    </a>
                  </li>
                  <li className={styles.online__friends__item}>
                    <a className={styles.online__friends__link} href="true">
                      <img src="true" alt="avatar" className={styles.online__friends__avatar} />
                      <div className={styles.online__friends__full__name}>John Hicks</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.friends__menu__item}>
                <ul className={styles.friends__menu__link} href="true">
                  Have been online recently
                  <li className={styles.online__recently__friends__item}>
                    <a className={styles.online__recently__friends__link} href="true">
                      <img
                        src="true"
                        alt="avatar"
                        className={styles.online__recently__friends__avatar}
                      />
                      <div className={styles.online__recently__friends__full__name}>
                        William Potter
                      </div>
                    </a>
                  </li>
                  <li className={styles.online__recently__friends__item}>
                    <a className={styles.online__recently__friends__link} href="true">
                      <img
                        src="true"
                        alt="avatar"
                        className={styles.online__recently__friends__avatar}
                      />
                      <div className={styles.online__recently__friends__full__name}>
                        Mark Nelson
                      </div>
                    </a>
                  </li>
                  <li className={styles.online__recently__friends__item}>
                    <a className={styles.online__recently__friends__link} href="true">
                      <img
                        src="true"
                        alt="avatar"
                        className={styles.online__recently__friends__avatar}
                      />
                      <div className={styles.online__recently__friends__full__name}>
                        James Gibson
                      </div>
                    </a>
                  </li>
                  <li className={styles.online__recently__friends__item}>
                    <a className={styles.online__recently__friends__link} href="true">
                      <img
                        src="true"
                        alt="avatar"
                        className={styles.online__recently__friends__avatar}
                      />
                      <div className={styles.online__recently__friends__full__name}>
                        Mary Bennett
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};
