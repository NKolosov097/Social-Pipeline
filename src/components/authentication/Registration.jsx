import React from 'react';
import { Typography, Form, Col, Row, Input, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {
  ButtonReg,
  Info,
  InfoContainer,
  FormAutReg,
  FieldRegisterReg,
  ButtonRegister,
  LinkAut,
  InputAut,
} from '../styled.jsx';
import styles from './Authentication.module.css';

const { Title, Paragraph } = Typography;

const Registration = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
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
                      <Title level={1}>Registration</Title>
                      <Title level={2}>Welcome to the Social Pipeline!</Title>
                    </Form.Item>
                  </Col>
                </InfoContainer>
                <InfoContainer>
                  <Col offset="12" />
                </InfoContainer>
              </Row>
            </Form.Item>
          </Info>
          <FormAutReg>
            <Form.Item
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
                  <InputAut
                    placeholder="Your Email..."
                    size="large"
                    autoComplete="new-email"
                    className={styles.form__input}
                  />
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
                  <InputAut
                    placeholder="Your username..."
                    size="large"
                    autoComplete="new-username"
                    className={styles.form__input}
                  />
                </Row>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password
                  placeholder="Your password..."
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  size="large"
                  className={styles.form__input}
                />
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
                <ButtonReg size="large" type="text" htmlType="submit" href="/main">
                  Register
                </ButtonReg>
              </Form.Item>

              <Paragraph>
                <FieldRegisterReg>
                  Are you already registered?
                  <ButtonRegister>
                    <LinkAut to="/login">Log In</LinkAut>
                  </ButtonRegister>
                </FieldRegisterReg>
              </Paragraph>
            </Form.Item>
          </FormAutReg>
        </Form>
      </div>
    </>
  );
};

export default Registration;
