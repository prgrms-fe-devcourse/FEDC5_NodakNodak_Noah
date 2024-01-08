import {
  NotificationContainer,
  NotificationHeader,
  NotificationList,
} from './StyledNotification';
// import useInterval from '@/hooks/useInterval';
import Button from '../Button';
import Badge from '../Badge';
import { useState, useEffect } from 'react';
import {
  seeNotifications,
  getNotificationArray,
} from '@/slices/notification/thunk';
import { useDispatch } from '@/store';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedNotifications } from '@/hooks/useSelectedNotifications';
import Bell from '@/assets/Bell';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
import { Comment, User } from '@/types/APIResponseTypes';

interface NotificationData {
  comment: Comment;
  follow: User;
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
        follow: userList.find((element) => element._id === follow),
      } as NotificationData;

      // TODO: follow 알림 구현
      // notificationData.comment 가 없는지 확인 comment 는 객체 즉  빈 객체인지 화ㅏㄱ인
      if ('comment' in notificationData.comment === false)
        return { _id, text: '' };

      const isVote =
        JSON.parse(notificationData.comment.comment).type === 'vote';
      const text = isVote
        ? `${author.fullName}님이 투표에 참여했습니다.`
        : `${author.fullName}님이 댓글을 달았습니다.`;

      return { _id, text };
    },
  );

  const ref = useClickAway((e: MouseEvent | TouchEvent) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'path' || tagName === 'svg') return;
    setToggleNotification(false);
  });

  const handleSeeNotifications = () => {
    if (!token) return;
    dispatch(seeNotifications({ token }));
  };

  const handleToggleCard = () => setToggleNotification(true);

  useEffect(() => {
    if (!token) return;
    dispatch(getNotificationArray({ token }));
  }, [dispatch, token]);

  // polling 방식 , 너무 많은 요청이 갈까봐 주석처리
  // useInterval(() => {
  //   if (!token) return;
  //   dispatch(getNotificationArray({ token }));
  // }, 10000);

  return (
    <Badge count={count}>
      <Bell onToggleCard={handleToggleCard} />
      {toggleNotification && (
        <NotificationContainer ref={ref}>
          <NotificationHeader>
            알림
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
              <li key={_id}>{text}</li>
            ))}
          </NotificationList>
        </NotificationContainer>
      )}
    </Badge>
  );
};

export default NotificationCardBell;
