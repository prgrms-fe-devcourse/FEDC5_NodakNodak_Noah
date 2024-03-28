import {
  AdminCard,
  ChannelCreator,
  FullName,
  Legend,
  LegendRead,
  RequestDate,
  RequestLi,
  RequestMessage,
  RequestUl,
} from './style';
import { Container } from '../Sign/style';
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/customAxios';
import { Button, Input, Text } from '@/components';
import { Message } from '@/types/APIResponseTypes';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user/thunk';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [channelName, setChannelName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getMessages = async () => {
      const { data } = await axiosInstance.get('messages/conversations');
      setMessages(data);
    };
    getMessages();
  }, []);

  const handleSeen = async (id: string) => {
    await axiosInstance.put('messages/update-seen', {
      sender: id,
    });
  };

  const handleCreateChannel = async () => {
    await axiosInstance.post('channels/create', {
      authRequired: false,
      description: '',
      name: channelName,
    });
  };

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <Container>
      <AdminCard>
        <Text tagType='span' fontType='h1' style={{ marginTop: '32px' }}>
          사용자의 문의 요청
        </Text>
        <Legend key={'Question Legend'}>
          <FullName>문의자</FullName>
          <RequestMessage>문의 사항</RequestMessage>
          <RequestDate>문의일</RequestDate>
          <LegendRead>처리 상태</LegendRead>
        </Legend>
        <RequestUl>
          {messages.length
            ? messages.map((message: Message) => {
                const originalDate = new Date(message.createdAt);
                const year = originalDate.getFullYear();
                const month = originalDate.getMonth() + 1;
                const day = originalDate.getDate();

                return (
                  <RequestLi
                    key={message.createdAt}
                    onClick={() => handleSeen(message.sender._id)}>
                    <FullName>{message.sender.fullName}</FullName>
                    <RequestMessage>{message.message}</RequestMessage>
                    <RequestDate>{`${year}/${month}/${day}`}</RequestDate>
                    <Button
                      size='small'
                      styleType='ghost'
                      disabled={message.seen}
                      event={message.seen ? 'disabled' : 'enabled'}
                      style={{ height: '16px' }}>
                      {message.seen ? '완료' : '미완료'}
                    </Button>
                  </RequestLi>
                );
              })
            : '문의 사항이 없습니다'}
        </RequestUl>
        <ChannelCreator>
          <Input
            height={'32px'}
            onChange={(e) => setChannelName(e.target.value)}
          />
          <Button onClick={handleCreateChannel}>채널 생성</Button>
        </ChannelCreator>
      </AdminCard>
    </Container>
  );
};

export default Admin;
