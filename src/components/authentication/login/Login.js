/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './login.css';
import '../../../index.css';

function Login(props) {
  return (
    <>
      <div className="container">
        {/* <h1 className="logo">System</h1> */}

        {/* <div className="wrapper"> */}
        <div className="info__block">
          <div className="info__description">
            <h2 className="info__title">Login</h2>
            <p className="info__text">Welcome to the</p>
            <p className="info__text__after">Social Pipeline!</p>
          </div>
        </div>
        <div className="authentication__block">
          <label for="username">Username</label>
          <input type="text" id="username" />
          <label for="password">Password</label>
          <input type="password" id="password" />
          <div className="authentication__submit__wrapper">
            <input className="authentication__submit" type="submit" id="log__in" value="Log In" />
          </div>
          <div className="register__wrapper">
            <div className="register__field">
              <span className="register__caption">
                Are you a new user?
                <a href className="button__register">
                  Register
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Login;
