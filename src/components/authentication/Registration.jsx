import React from 'react';
import styles from './Css.module.css';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Form, Col, Row, Input, Button as ButtonLib, Checkbox } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
// import Login from './Login.jsx';

const { Title, Paragraph } = Typography;
const Button = styled(ButtonLib)`
  bottom: -100px;
  color: #222;
  background: rgb(200, 200, 200);
  border-radius: 10px;
  border: rgb(200, 200, 200);
`;

const Registration = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className={styles.container}>
        <Form labelWrap="true" className={styles.wrapper__form}>
          <Form.Item
            labelWrap="true"
            className={styles.info}
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <Row>
              <Col offset="0" className={styles.info__container}>
                <Form.Item className={styles.info__item}>
                  <Title level={1}>Registration</Title>
                  <Title level={2}>Welcome to the Social Pipeline!</Title>
                </Form.Item>
              </Col>
              <Col offset="12" className={styles.info__container} />
            </Row>
          </Form.Item>
          <Form.Item
            className={styles.form__aut__regist}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Row offset="24">
                <Input autoComplete="new-email" className={styles.form__input} />
              </Row>
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Row offset="24">
                <Input autoComplete="new-username" className={styles.form__input} />
              </Row>
            </Form.Item>

            <Form.Item
              className={styles.form__item}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password className={styles.form__input} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox className={styles.checkbox}>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 9,
              }}
            >
              <Button
                size="large"
                type="text"
                className={styles.authentication__submit__regist}
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
            <Paragraph className={styles.field__register__regist}>
              Are you already registered?
              <Button className={styles.button__register} type="link">
                <Link to="/login">Log In</Link>
              </Button>
            </Paragraph>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Registration;