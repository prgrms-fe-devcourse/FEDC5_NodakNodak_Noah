import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BellIcon from '@/assets/BellIcon';
import theme from '@/styles/theme';
import { useDispatch } from '@/store';
import {
  seeNotifications,
  getNotificationArray,
} from '@/slices/notification/thunk';
import { getPostListByMyId } from '@/slices/postList/thunks';
import { userToUserSnippet } from '@/utils/makeSnippet';
import useInterval from '@/hooks/useInterval';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedNotifications } from '@/hooks/useSelectedNotifications';
import { useSelectedPostListByMyId } from '@/hooks/useSelectedPostListById';
import {
  NotificationContainer,
  NotificationList,
  NotificationHeader,
} from '@/components/layout/Header/NotificationCardBell/style';
import UserSnippet from '@/components/Main/UserList/UserSnippet';
import { Badge, ScrollBar, Text, Button } from '@/components/common';
import UserGroup from '@/components/Main/UserList/UserGroup';

const NotificationCardBell = () => {
  const token = localStorage.getItem('auth-token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toggleNotification, setToggleNotification] = useState(false);
  const notifications = useSelectedNotifications();
  const postListByMyId = useSelectedPostListByMyId();
  const myInfo = useSelectedMyInfo();
  const count = notifications.length;

  const notificationsArray = notifications.map(
    ({ _id, comment, follow, author, post, message }) => {
      const snippetAuthor = userToUserSnippet(author, myInfo);
      if (!snippetAuthor) return { _id, text: '알수 없는 알림' };

      const follower = follow ? snippetAuthor.fullName : '';
      const postTitleJsonString = postListByMyId.find(
        (postByUser) => postByUser._id === post,
      )?.title;

      const postTitle = postTitleJsonString
        ? JSON.parse(postTitleJsonString).title
        : '';

      const channelId = postListByMyId.find(
        (postByUser) => postByUser._id === post,
      )?.channel._id;

      if (comment && 'comment' in comment && snippetAuthor) {
        const isVote = JSON.parse(comment.comment).type === 'vote';

        const text = isVote
          ? `${snippetAuthor.fullName} 님이 ${postTitle} 글에 투표하였습니다.`
          : `${snippetAuthor.fullName} 님이 ${postTitle} 글에 댓글을 달았습니다.`;

        return {
          _id,
          text,
          snippetAuthor,
          handleClick: channelId
            ? () => navigate(`/detail/${channelId}/${post}`)
            : undefined,
        };
      } else if (follower) {
        const text = `${follower} 님이 팔로우했습니다.`;

        return { _id, text, snippetAuthor };
      } else if (post && !follow && snippetAuthor) {
        const text = `${snippetAuthor.fullName}님이 ${postTitle} 글에 좋아요 를 남겼습니다.`;

        return {
          _id,
          text,
          snippetAuthor,
          handleClick: channelId
            ? () => navigate(`/detail/${channelId}/${post}`)
            : undefined,
        };
      } else if (message && snippetAuthor) {
        const text = `${snippetAuthor.fullName} 님이 요청을 보냈습니다.`;

        return {
          _id,
          text,
          snippetAuthor,
          handleClick: undefined,
        };
      } else {
        return { _id, text: '알수 없는 알림', snippetAuthor };
      }
    },
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
        <NotificationContainer ref={ref}>
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
                  ({ _id, text, snippetAuthor: author, handleClick }) => {
                    return (
                      <UserSnippet
                        key={_id}
                        userId={author?._id || ''}
                        image={author?.image || ''}
                        isOnline={author?.isOnline || false}
                        isFollowing={author?.isFollowing || false}
                        handleClick={handleClick}
                        fullName={text}
                        style={{
                          color: theme.isDark
                            ? theme.colors.primary[100]
                            : theme.colors.primary[500],
                        }}
                      />
                    );
                  },
                )}
              </UserGroup>
            </NotificationList>
          </ScrollBar>
        </NotificationContainer>
      )}
    </Badge>
  );
};

export default NotificationCardBell;
