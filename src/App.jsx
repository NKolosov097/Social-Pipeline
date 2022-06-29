import styled from 'styled-components';

import 'antd/dist/antd.css';
import './index.css';

import Login from './components/authentication/login/Login.js';
import Registration from './components/authentication/registration/Registration.js';
import Login2 from './components/authentication/Login2.jsx';
import Registration2 from './components/authentication/Registration2.jsx';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      {/* <Login2></Login2> */}
      <Registration2></Registration2>
      {/* <Login></Login>*/}
      {/* <Registration></Registration> */}
    </Wrapper>
  );
}

export default App;
