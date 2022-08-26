import React from 'react';
import styles from './Main.module.css';

export const Features = (props) => {
  return (
    <div className={styles.main__header__features}>
      <span className={styles.features__gender}>gender: {props.gender || 'penguin'}</span>
      {props.age.length > 0 ? <span className={styles.features__age}>age: {props.age}</span> : null}
      {props.post.length > 0 ? (
        <span className={styles.features__post}>post: {props.post}</span>
      ) : null}
    </div>
  );
};
