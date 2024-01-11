import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { Button, Input } from '@/components/common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #faf6e8;
`;

const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 960px;
  height: 680px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 1px #868e96;
  @media screen and (max-width: 900px) {
    width: 680px;
  }
  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const MessageContent = styled.textarea`
  height: 400px;
`;

const Request = () => {
  const [content, setContent] = useState('');

  const handleMessageSend = useCallback(async () => {
    const token = localStorage.getItem('auth-token');
    const axiosOptions = {
      url: 'https://kdt.frontend.5th.programmers.co.kr:5003/messages/create',
      method: 'POST',
      data: {
        message: content,
        receiver: '64edba3f94355811fecdc843',
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios(axiosOptions);
  }, [content]);

  return (
    <Container>
      관리자에게 문의
      <Card>
        <InputWrapper>
          받는 사람
          <Input readOnly placeholder='XX' />
        </InputWrapper>
        <MessageContent onChange={(e) => setContent(e.target.value)} />
        <Button onClick={handleMessageSend}>전송</Button>
      </Card>
    </Container>
  );
};

export default Request;
