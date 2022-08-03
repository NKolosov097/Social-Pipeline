import React, { useState } from 'react';
import { Typography, Form } from 'antd';
import { Button, ButtonCounterToHome, ButtonCounterIncDec } from '../styled.jsx';
import styles from './Authentication.module.css';
const { Title } = Typography;

export const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  //   const handleClick1 = () => {
  //     setCounter(counter + 1);
  //   };

  //   const handleClick2 = () => {
  //     setCounter(counter - 1);
  //   };

  return (
    <>
      <Form.Item className={styles.formForCounter}>
        <Title className={styles.titleCounter} level={3}>
          Counter {props.name}
        </Title>
        <Title className={styles.titleCounter} level={4}>
          {counter}
        </Title>
        {/* <Button onClick={handleClick1}>Incrementor</Button>
        <Button onClick={handleClick2}>Decrementor</Button> */}

        <ButtonCounterIncDec onClick={() => setCounter(counter + 1)}>
          Incrementor
        </ButtonCounterIncDec>
        <ButtonCounterIncDec onClick={() => setCounter(counter - 1)}>
          Decrementor
        </ButtonCounterIncDec>
        <Form.Item>
          <ButtonCounterToHome size="large" href="/">
            To Home
          </ButtonCounterToHome>
        </Form.Item>
        <Button></Button>
      </Form.Item>
    </>
  );
};
