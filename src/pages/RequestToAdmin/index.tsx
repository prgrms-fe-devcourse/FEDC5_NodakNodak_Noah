import { useCallback, useEffect, useState } from 'react';
import {
  Container,
  MessageContent,
  RequestCard,
} from '@/pages/RequestToAdmin/style';
import { Button, Text } from '@/components';
import axiosInstance from '@/utils/customAxios';
import { getMyInfo } from '@/slices/user/thunk';
import { useDispatch } from '@/store';

const RequestToAdmin = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const handleMessageSend = useCallback(async () => {
    await axiosInstance.post('messages/create', {
      message: content,
      receiver: '64edba3f94355811fecdc843',
    });
    alert('요청이 접수 되었습니다.');
  }, [content]);

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <Container>
      <RequestCard>
        <Text tagType='span' fontType='h1'>
          무엇을 도와드릴까요?
        </Text>
        <Text
          tagType='p'
          fontType='h3'
          colorType='grayscale'
          colorNumber='300'
          style={{ marginBottom: '16px' }}>
          채널 생성 요청, 불건전 글 신고
        </Text>
        <MessageContent onChange={(e) => setContent(e.target.value)} />
        <Button onClick={handleMessageSend}>전송</Button>
      </RequestCard>
    </Container>
  );
};

export default RequestToAdmin;
