import React from 'react';
import styles from './Main.module.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export const Features = ({ gender, age, post }) => {
  return (
    <div className={styles.main__header__features}>
      <span className={styles.features__gender}>gender: {gender || 'penguin'}</span>
      {age ? (
        <span className={styles.features__age}>age: {age}</span>
      ) : (
        <Spin indicator={antIcon} />
      )}
      {post.length > 0 ? <span className={styles.features__post}>post: {post}</span> : null}
    </div>
  );
};
