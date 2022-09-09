import { Typography } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import 'antd/dist/antd.css';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;

  background: papayawhip;
`;

const PersonWrapper = styled.section`
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const { Title, Paragraph } = Typography;

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/person`, { mode: 'no-cors' });
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <PersonWrapper>
        <Title>My App!</Title>
        {isLoading && <Paragraph>Загрузка</Paragraph>}
        {isError && <Paragraph>Что то пошло не так</Paragraph>}
        {data && (
          <>
            <Paragraph>{data.fullname}</Paragraph>
            <Paragraph>{data.nickName}</Paragraph>
            <Paragraph>{data.birthDate}</Paragraph>
          </>
        )}
      </PersonWrapper>
    </Wrapper>
  );
}

export default App;
