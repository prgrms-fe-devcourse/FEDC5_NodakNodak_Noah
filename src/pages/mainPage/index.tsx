import { MainWrapper, PostContentWrapper, MainFlexWrapper } from './StyledMain';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import UserListCard from '@/components/UserListCard';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { RootState, useDispatch } from '@/store';
import { getPostListByChannelId } from '@/slices/postList/thunks';
import { getUserList } from '@/slices/userList/thunk';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import {
  useSelectedChannel,
  useSelectedChannelLoading,
} from '@/hooks/useSelectedChannel';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
// import useInterval from '@/hooks/useInterval'; // polling 방식 , 너무 많은 요청이 갈까봐 주석처리
import { userListToUserSnippetList } from '@/slices/userList/utils';
import { usePagination } from '@/hooks/usePagination';
import { getMyInfo } from '@/slices/user';

import { postListToPostSnippetList } from '@/slices/postList/utils';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = useSelectedUserList();
  const channel = useSelectedChannel();
  const channelLoading = useSelectedChannelLoading();
  const { paginationedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postListToPostSnippetList(useSelectedPostList()));
  const myInfo = useSelector((state: RootState) => state.userInfo.authUser);

  const handleWriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!token) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }
    navigate('/write');
  };

  useEffect(() => {
    if (!channel || !('_id' in channel)) return;
    dispatch(getPostListByChannelId({ channelId: channel._id }));
  }, [dispatch, channel]);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // polling 방식 , 너무 많은 요청이 갈까봐 주석처리
  // useInterval(() => {
  //   dispatch(getUserList());
  // }, 6000);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/sign');
    } else {
      dispatch(getMyInfo({ token }));
    }
  }, [navigate, dispatch]);

  return (
    <>
      <MainWrapper>
        <PostContentWrapper>
          <MainFlexWrapper>
            <Text tagType='span' fontType='h2'>
              {!channelLoading && channel
                ? `${channel.name} 채널`
                : 'loading...'}
            </Text>
            <Button styleType='ghost' size='small' onClick={handleWriteClick}>
              글 쓰기
            </Button>
          </MainFlexWrapper>
          <PostCard.Group>
            {paginationedPostList.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </PostCard.Group>
          <Pagination
            page={currentPage}
            totalPage={totalPage}
            handlePageChange={handlePageChange}
          />
        </PostContentWrapper>
        <UserListCard users={userListToUserSnippetList(userList, myInfo)} />
      </MainWrapper>
    </>
  );
};

export default Main;
