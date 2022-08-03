import styled from 'styled-components';
import { Button as ButtonLib, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

export const InputAut = styled(Input)`
  background: #222;
  font-size: 17px;
  color: #fff;

  @media (max-width: 775px) {
    font-size: 20px;
  }
`;

export const InfoTitle = styled(Title)`
  color: rgb(230, 230, 230) !important;
`;

export const Button = styled(ButtonLib)`
  color: #222;
  background: rgb(200, 200, 200);
  border: rgb(200, 200, 200);
  text-shadow: none;
  line-height: 60px !important;

  left: -60px;
  padding: 60px 100px;
  display: block;
  cursor: pointer;
  font-size: 25px;
  border-radius: 50px;

  transition: all 300ms ease;

  &:hover {
    color: #000;
    background: rgb(200, 200, 200);
  }

  &:active {
    color: #222;
    background: rgb(200, 200, 200);
    -webkit-box-shadow: 4px 5px 15px -7px #606060;
    box-shadow: 4px 5px 15px -7px #606060;
  }
`;

export const ButtonReg = styled(Button)`
  padding: 60px 100px;
`;

export const ButtonLink = styled.button`
  position: absolute;
  color: #222;
  background: transparent;
  border: rgb(200, 200, 200);
  text-shadow: none;
  text-decoration: none;
  padding: 0 10px;
`;

export const ButtonCounterToHome = styled(Button)`
  left: 0;
  background: rgb(200, 200, 200);
  border: rgb(200, 200, 200);
  color: #222;
  line-height: 60px !important;
  padding: 30px 50px;
  margin: 40px 10px;
  display: inline;

  cursor: pointer;
`;

export const ButtonCounterIncDec = styled(Button)`
  left: 0;
  display: inline;
  background: rgb(200, 200, 200);
  border: rgb(200, 200, 200);
  color: #222;
  padding: 10px 20px 50px;
  margin: 20px;

  cursor: pointer;
`;

export const Info = styled.div`
  position: absolute;

  z-index: 100;
  width: 650px;
  height: 370px;
  padding: 20px;
  border-radius: 20px;

  color: #000;
  background: #4e4e4e;

  @media (max-width: 775px) {
    width: 350px;
    height: 400px;
  } ;
`;

export const InfoContainer = styled.div`
  width: 50%;

  @media (max-width: 775px) {
    width: 100%;
  }
`;

export const FormAut = styled.section`
  position: absolute;
  z-index: 1000;
  width: 370px;
  height: 470px;
  padding: 20px;

  left: calc(50% + 20px);

  background: #dddbdb;
  border-radius: 20px;

  @media (max-width: 775px) {
    left: auto;
    top: 430px;
    height: 480px;
  }

  @media (max-width: 575px) {
    height: 550px;
  }

  @media (max-width: 376px) {
    top: 430px;
  }
`;

export const FormAutReg = styled.div`
  position: absolute;
  z-index: 1000;
  width: 370px;
  height: 540px;
  padding: 20px;

  left: calc(50% + 20px);

  background: #222;
  border-radius: 20px;

  @media (max-width: 775px) {
    left: auto;
    top: 430px;
    height: 550px;
  }

  @media (max-width: 575px) {
    height: 690px;
  }

  @media (max-width: 376px) {
    top: 420px;
  }
`;

export const FormInput = styled.div`
  padding: 14px;
  background: transparent;
  border-radius: 10px;
`;

export const FieldRegister = styled.div`
  position: absolute;
  text-decoration: none;
  color: #333;
  background: transparent;
  border: none;
  text-shadow: none;

  bottom: -225px;
`;

export const FieldRegisterReg = styled.div`
  position: absolute;
  text-decoration: none;
  color: #333;
  background: transparent;
  border: none;
  text-shadow: none;

  bottom: -120px;
`;

export const ButtonRegister = styled.div`
  color: #222;
  display: inline;
  padding: 0 15px;
  position: static;
  color: rgb(200, 200, 200);
  text-decoration: none;
  background: transparent;
  outline: none;
`;
