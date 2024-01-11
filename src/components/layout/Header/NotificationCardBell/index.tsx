// import useInterval from '@/hooks/useInterval';
import { useState, useEffect } from 'react';

import Bell from '@/assets/Bell';
import {
  NotificationContainer,
  NotificationHeader,
  NotificationList,
} from '@/components/layout/Header/NotificationCardBell/style';
import { Badge, Button, ScrollBar, Text } from '@/components/common';
import { useDispatch } from '@/store';
import {
  seeNotifications,
  getNotificationArray,
} from '@/slices/notification/thunk';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
import { useSelectedNotifications } from '@/hooks/useSelectedNotifications';
import { Comment } from '@/types/APIResponseTypes';
import theme from '@/styles/theme';

interface NotificationData {
  comment: Comment;
  follower: string;
}

const NotificationCardBell = () => {
  const token = localStorage.getItem('auth-token');
  const dispatch = useDispatch();
  const [toggleNotification, setToggleNotification] = useState(false);
  const notifications = useSelectedNotifications();
  const userList = useSelectedUserList();
  const count = notifications.length;

  const notificationsArray = notifications.map(
    ({ _id, comment, follow, author }) => {
      const notificationData = {
        comment,
        follower:
          userList.find((user) => user._id === follow?.follower)?.fullName ||
          '',
      } as NotificationData;

      if (comment && 'comment' in notificationData.comment) {
        const isVote =
          JSON.parse(notificationData.comment.comment).type === 'vote';
        const text = isVote
          ? `${author.fullName}님이 투표에 참여했습니다.`
          : `${author.fullName}님이 댓글을 달았습니다.`;

        return { _id, text };
      } else if (notificationData.follower) {
        const text = `${notificationData.follower}님이 팔로우했습니다.`;

        return { _id, text };
      } else {
        const text = `좋아요가 눌렸습니다.`;

        return { _id, text };
      }
    },
  );

  const ref = useClickAway((e: MouseEvent | TouchEvent) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'path' || tagName === 'svg') return;
    setToggleNotification(false);
  });

  const handleSeeNotifications = () => {
    if (!token) return;
    dispatch(seeNotifications());
  };

  const handleToggleCard = () => setToggleNotification(true);

  useEffect(() => {
    if (!token) return;
    dispatch(getNotificationArray());
  }, [dispatch, token]);

  // polling 방식 , 너무 많은 요청이 갈까봐 주석처리
  // useInterval(() => {
  //   if (!token) return;
  //   dispatch(getNotificationArray());
  // }, 10000);

  return (
    <Badge count={count}>
      <Bell onToggleCard={handleToggleCard} />
      {toggleNotification && (
        <NotificationContainer ref={ref}>
          <ScrollBar>
            <NotificationHeader>
              <Text
                tagType='span'
                fontType='body2'
                colorType='primary'
                colorNumber={theme.isDark ? '100' : '500'}>
                알림
              </Text>
              <Button
                type='button'
                size='small'
                style={{ padding: '8px 4px' }}
                onClick={handleSeeNotifications}>
                모두 읽음
              </Button>
            </NotificationHeader>
            <NotificationList>
              {notificationsArray.map(({ _id, text }) => (
                <li
                  key={_id}
                  style={{
                    color: theme.isDark
                      ? theme.colors.primary[100]
                      : theme.colors.primary[500],
                  }}>
                  {text}
                </li>
              ))}
            </NotificationList>
          </ScrollBar>
        </NotificationContainer>
      )}
    </Badge>
  );
};

export default NotificationCardBell;
