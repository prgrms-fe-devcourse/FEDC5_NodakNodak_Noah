import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import BellIcon from '@/assets/BellIcon';
import theme from '@/styles/theme';
import { useDispatch } from '@/store';
import {
  seeNotifications,
  getNotificationArray,
} from '@/slices/notification/thunk';
import { getPostListByMyId } from '@/slices/postList/thunks';
import { notificationType } from '@/slices/notification';
import useInterval from '@/hooks/useInterval';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedNotifications } from '@/hooks/useSelectedNotifications';
import { useSelectedPostListByMyId } from '@/hooks/useSelectedPostListById';
import {
  NotificationList,
  NotificationHeader,
  NotificationBox,
} from '@/components/layout/Header/NotificationCardBell/style';
import UserSnippet from '@/pages/Main/components/UserList/UserSnippet';
import { Badge, ScrollBar, Text, Button } from '@/components';
import UserGroup from '@/pages/Main/components/UserList/UserGroup';
import { type User } from '@/types/APIResponseTypes';

export interface NotificationData {
  _id: string;
  text: string;
  isFollowing: boolean;
  author: User;
  handleClick?: () => void | undefined;
}

const NotificationCardBell = () => {
  const token = localStorage.getItem('auth-token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toggleNotification, setToggleNotification] = useState(false);
  const notifications = useSelectedNotifications();
  const postListByMyId = useSelectedPostListByMyId();
  const myInfo = useSelectedMyInfo();
  const count = notifications.length;

  const notificationsArray = useMemo(
    () =>
      notifications.map(({ _id, follow, author, post, type }) => {
        const isFollowing =
          myInfo.following.some(({ user }) => user === author._id) &&
          myInfo.followers.some(({ follower }) => follower === author._id);

        const notificationData: NotificationData = {
          _id,
          text: '',
          author,
          isFollowing,
          handleClick: undefined,
        };

        const follower = follow ? author.fullName : '';
        const postTitleJsonString = postListByMyId.find(
          (postByUser) => postByUser._id === post,
        )?.title;

        const postTitle = postTitleJsonString
          ? (JSON.parse(postTitleJsonString).title as string)
          : '';

        const channelId = postListByMyId.find(
          (postByUser) => postByUser._id === post,
        )?.channel._id;

        const ellipsisedTitle = (() => {
          const maxLength = 15;
          if (postTitle.length > maxLength) {
            return `${postTitle.slice(0, maxLength)} ...`;
          } else {
            return postTitle;
          }
        })();

        switch (type) {
          case notificationType.comment:
            notificationData.text = `${author.fullName} 님이 ${ellipsisedTitle} 글에 댓글을 달았습니다.`;
            notificationData.handleClick = channelId
              ? () => navigate(`/detail/${channelId}/${post}`)
              : undefined;
            return notificationData;
          case notificationType.vote:
            notificationData.text = `${author.fullName} 님이 ${ellipsisedTitle} 글에 투표하였습니다.`;
            notificationData.handleClick = channelId
              ? () => navigate(`/detail/${channelId}/${post}`)
              : undefined;
            return notificationData;
          case notificationType.follow:
            notificationData.text = `${follower} 님이 팔로우했습니다.`;
            return notificationData;
          case notificationType.like:
            notificationData.text = `${author.fullName} 님이 ${ellipsisedTitle} 글에 좋아요 를 남겼습니다.`;
            notificationData.handleClick = channelId
              ? () => navigate(`/detail/${channelId}/${post}`)
              : undefined;
            return notificationData;
          case notificationType.message:
            notificationData.text = `${author.fullName} 님이 요청을 보냈습니다.`;
            return notificationData;
          case notificationType.notdefined:
            notificationData.text = `${author.fullName} 님이 언팔로우 했습니다.`;
            return notificationData;
          default:
            notificationData.text = '알수없는 알림입니다.';
            return notificationData;
        }
      }),
    [
      myInfo.followers,
      myInfo.following,
      navigate,
      notifications,
      postListByMyId,
    ],
  );

  const ref = useClickAway(() => {
    setToggleNotification(false);
  });

  const handleSeeNotifications = () => {
    if (!token) return;
    dispatch(seeNotifications());
  };

  const handleToggleCard = () => setToggleNotification(true);

  useEffect(() => {
    if (!token) return;
    dispatch(getPostListByMyId());
    dispatch(getNotificationArray());
  }, [dispatch, token]);

  useInterval(() => {
    if (!token) return;
    dispatch(getNotificationArray());
  }, 10000);

  return (
    <Badge count={count}>
      <BellIcon onToggleCard={handleToggleCard} />
      {toggleNotification && (
        <NotificationBox ref={ref}>
          <ScrollBar>
            <NotificationHeader>
              <Text tagType='span' fontType='body3'>
                {`알림 - ${notificationsArray.length}`}
              </Text>
              <Button
                type='button'
                size='small'
                style={{ padding: '8px 4px' }}
                styleType='danger'
                onClick={handleSeeNotifications}>
                알림 삭제
              </Button>
            </NotificationHeader>
            <NotificationList>
              <UserGroup>
                {notificationsArray.length === 0 && (
                  <Text tagType='span' fontType='h3'>
                    {'알림이 없습니다.'}
                  </Text>
                )}
                {notificationsArray.map(
                  ({ _id, text, author, isFollowing, handleClick }) => (
                    <UserSnippet
                      key={_id}
                      userId={author._id}
                      image={author.image}
                      isOnline={author.isOnline}
                      isFollowing={isFollowing}
                      handleClick={handleClick}
                      text={text}
                      style={{
                        color: theme.isDark
                          ? theme.colors.primary[100]
                          : theme.colors.primary[500],
                      }}
                    />
                  ),
                )}
              </UserGroup>
            </NotificationList>
          </ScrollBar>
        </NotificationBox>
      )}
    </Badge>
  );
};

export default NotificationCardBell;
