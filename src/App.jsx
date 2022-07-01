import styled from 'styled-components';

import 'antd/dist/antd.css';
import './index.css';

import Login from './components/authentication/Login.jsx';
import Registration from './components/authentication/Registration.jsx';
// import { Layout } from 'antd';

import { Routes, Route } from 'react-router';

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
        {/* <Login /> */}
        <Registration />
      </Wrapper>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
