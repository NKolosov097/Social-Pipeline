import styled from 'styled-components';
import { Button as ButtonLib, Input } from 'antd';
import { Link } from 'react-router-dom';

export const InputAut = styled(Input)`
  background: transparent;
  font-size: 17px;
  color: #fff;

  @media (max-width: 775px) {
    font-size: 20px;
  }
`;

export const Button = styled(ButtonLib)`
  color: #222;
  bottom: -100px;
  background: rgb(200, 200, 200);
  border-radius: 50px;
  border: rgb(200, 200, 200);
  text-shadow: none;

  left: -37px;
  padding: 10px 45px 50px;
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
  left: -47px;
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

export const Info = styled.div`
  position: absolute;

  z-index: 100;
  width: 650px;
  height: 370px;
  padding: 20px;
  border-radius: 20px;

  color: #000;
  background: #fff;

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

  background: #222;
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
  color: rgb(200, 200, 200);
  background: transparent;
  border: none;
  text-shadow: none;
  margin: 5px 10px;
  left: 60px;

  bottom: -140px;
`;

export const FieldRegisterReg = styled.div`
  position: absolute;
  text-decoration: none;
  color: rgb(200, 200, 200);
  background: transparent;
  border: none;
  text-shadow: none;
  margin: 5px 10px;
  left: 47px;

  bottom: -130px;
`;

export const ButtonRegister = styled.div`
  color: #222;
  display: inline;
  padding: 0 10px;
  position: static;
  color: rgb(200, 200, 200);
  text-decoration: none;
  background: transparent;
  outline: none;
`;

export const LinkAut = styled(Link)`
  color: #fff;
`;
