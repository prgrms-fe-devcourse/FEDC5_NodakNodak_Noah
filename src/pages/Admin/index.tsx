import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/apis/core';
import { Button, Input, Text } from '@/components';
import { Spinner } from '@/components/MainPageSpinner/style';
import { getMyInfo } from '@/slices/user/thunk';
import { useDispatch } from '@/store';
import { Message } from '@/types/APIResponseTypes';
import { Container } from '../Sign/style';
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

const Admin = () => {
  const [channelName, setChannelName] = useState('');
  const dispatch = useDispatch();

  const { data: messages, isPending } = useQuery({
    queryKey: ['request'],
    queryFn: async () =>
      await api.get<Message[]>({ url: 'messages/conversations' }),
  });

  const handleSeen = async (id: string) => {
    await api.put({ url: 'messages/update-seen', data: { sender: id } });
  };

  const handleCreateChannel = async () => {
    await api.post({
      url: 'channels/create',
      data: {
        authRequired: false,
        description: '',
        name: channelName,
      },
    });
  };

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <Container>
      <AdminCard>
        <Text tagType='span' fontType='h1' style={{ marginTop: '32px' }}>
          사용자 문의 요청
        </Text>
        <Legend key={'Question Legend'}>
          <FullName>문의자</FullName>
          <RequestMessage>문의 사항</RequestMessage>
          <RequestDate>문의일</RequestDate>
          <LegendRead>처리 상태</LegendRead>
        </Legend>
        {isPending ? (
          <Spinner />
        ) : (
          <RequestUl>
            {messages && messages.length
              ? messages.map(({ createdAt, sender, message, seen }) => {
                  const originalDate = new Date(createdAt);
                  const year = originalDate.getFullYear();
                  const month = originalDate.getMonth() + 1;
                  const day = originalDate.getDate();

                  return (
                    <RequestLi
                      key={createdAt}
                      onClick={() => handleSeen(sender._id)}>
                      <FullName>{sender.fullName}</FullName>
                      <RequestMessage>{message}</RequestMessage>
                      <RequestDate>{`${year}/${month}/${day}`}</RequestDate>
                      <Button
                        size='small'
                        styleType='ghost'
                        disabled={seen}
                        event={seen ? 'disabled' : 'enabled'}
                        style={{ height: '16px' }}>
                        {seen ? '완료' : '미완료'}
                      </Button>
                    </RequestLi>
                  );
                })
              : '문의 사항이 없습니다'}
          </RequestUl>
        )}
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
