/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../login/login.css';
import '../../../index.css';

function Registration(props) {
  return (
    <>
      <div className="container">
        {/* <h1 className="logo">System</h1> */}

        {/* <div className="wrapper"> */}
        <div className="info__block">
          <div className="info__description">
            <h2 className="info__title">Registration</h2>
            <p className="info__text">Welcome to the</p>
            <p className="info__text__after">Social Pipeline!</p>
          </div>
        </div>
        <div className="authentication__block registration__block">
          <label for="email">Email</label>
          <input type="text" id="email" />
          <label for="username">Username</label>
          <input type="text" id="username" />
          <label for="password">Password</label>
          <input type="password" id="password" />
          <label for="password">Confirm password</label>
          <input type="password" id="confirm__password" />
          <div className="authentication__submit__wrapper">
            <input
              className="authentication__submit"
              type="submit"
              id="registration"
              value="Register"
            />
          </div>
          <div className="register__wrapper">
            <div className="register__field">
              <span className="register__caption">
                Are you already registered?
                <a href="../login/Login.js" className="button__register">
                  Log In
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

export default Registration;
