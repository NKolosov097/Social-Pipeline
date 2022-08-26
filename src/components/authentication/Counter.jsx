import React, { useState, Link } from 'react';
import { Typography, Form } from 'antd';
import { Button, ButtonCounterToHome, ButtonCounterIncDec } from '../styled.jsx';
import styles from './Authentication.module.css';
const { Title } = Typography;

export const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Form.Item className={styles.formForCounter}>
        <Title className={styles.titleCounter} level={3}>
          Counter {props.name}
        </Title>
        <Title className={styles.titleCounter} level={4}>
          {counter}
        </Title>

        <ButtonCounterIncDec onClick={() => setCounter((counter) => counter + 1)}>
          Incrementor
        </ButtonCounterIncDec>
        <ButtonCounterIncDec onClick={() => setCounter((counter) => counter - 1)}>
          Decrementor
        </ButtonCounterIncDec>
        <Form.Item>
          <ButtonCounterToHome size="large">
            <Link to="/">To Home</Link>
          </ButtonCounterToHome>
        </Form.Item>
        <Button></Button>
      </Form.Item>
    </>
  );
};
