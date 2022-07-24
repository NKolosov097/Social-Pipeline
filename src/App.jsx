import styled from 'styled-components';

import 'antd/dist/antd.min.css';
import './index.css';

import Login from './components/authentication/Login.jsx';
import Registration from './components/authentication/Registration.jsx';
import { Routes, Route, Navigate } from 'react-router';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
