import React from 'react';
import styles from './Main.module.css';

export const Description = (props) => {
  return (
    <div className={styles.main__header__description}>
      {props.description || <span>Mysterious stranger...</span>}
    </div>
  );
};
