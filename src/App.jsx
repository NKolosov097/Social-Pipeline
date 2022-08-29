import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import './index.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Login } from './components/authentication/Login.jsx';
import { Registration } from './components/authentication/Registration.jsx';
import { Main } from './components/mainPageOfApp/main/Main.jsx';
import { Counter } from './components/authentication/Counter';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
`;

const PrivateRoute = ({ isAuth }) => {
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    );
  }
};

function App() {
  const [isAuth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(true);
  };

  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login handleAuth={handleAuth} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/counter" element={<PrivateRoute isAuth={isAuth} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
