import React, { useEffect, useState } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import styles from './Main.module.css';

import { Features } from './Features';
import { Description } from './Description';
import { Header } from '../header/Header';
import { LeftMenu } from '../leftMenu/LeftMenu';
import { Friends } from '../friends/Friends';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export const Main = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:3000/api/main`, { mode: 'no-cors' });
        const data = await res.json();
        // hhtps://localhost:600/api/main
        setData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <LeftMenu />

        <section className={styles.wrapper__main__area}>
          <div className={styles.header__main__area}>
            <div className={styles.wrapper__avatar}>
              <img src="true" alt="avatar" />
            </div>
            <div className={styles.main__header__info}>
              <div className={styles.main_header__fullname}>
                {data ? <span>{data.fullname}</span> : <Spin indicator={antIcon} />}
                {/* <span>{data.fullname}</span> */}
              </div>
              <Features age={data} post={'Student'} />
              <Description description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text" />
            </div>
          </div>
        </section>

        <Friends />
      </div>
    </>
  );
};
