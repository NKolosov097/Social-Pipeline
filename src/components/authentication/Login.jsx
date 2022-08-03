import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import { InfoContainer, Info, FormAut, InfoTitle, FieldRegister, ButtonLink } from '../styled.jsx';
import styles from './Authentication.module.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export const Login = ({ handleAuth }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    handleAuth();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className={styles.container__for__aut}>
        <Form labelWrap="true" className={styles.wrapper__form}>
          <Info>
            <Form.Item
              labelWrap="true"
              name="basic"
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 24,
              }}
            >
              <Row>
                <InfoContainer>
                  <Col offset="0">
                    <Form.Item className={styles.info__item}>
                      <InfoTitle level={1}>Log In</InfoTitle>
                      <InfoTitle level={2}>Welcome to the Social Pipeline!</InfoTitle>
                    </Form.Item>
                  </Col>
                </InfoContainer>
                <InfoContainer>
                  <Col offset="12" />
                </InfoContainer>
              </Row>
            </Form.Item>
          </Info>
          <FormAut
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="true">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" href="/counter">
                Log in
              </Button>
              <FieldRegister>
                Are you a new user?
                <ButtonLink>
                  <Link to="/registration">Register</Link>
                </ButtonLink>
              </FieldRegister>
            </Form.Item>
          </FormAut>
        </Form>
      </div>
    </>
  );
};
