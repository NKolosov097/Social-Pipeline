import { Typography } from 'antd';

import styled from 'styled-components';

import 'antd/dist/antd.css';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background: papayawhip;
`;

const { Title } = Typography;

function App() {
  return (
    <Wrapper>
      <Title>My new amazing App !</Title>
    </Wrapper>
  );
}

export default App;
