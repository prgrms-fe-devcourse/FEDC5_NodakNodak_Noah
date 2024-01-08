import { MainWrapper, PostContentWrapper, MainFlexWrapper } from './StyledMain';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import UserListCard from '@/components/UserListCard';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { RootState, useDispatch } from '@/store';
import {
  getFullPostList,
  getPostListByChannelId,
} from '@/slices/postList/thunks';
import { getUserList } from '@/slices/userList/thunk';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import {
  useSelectedChannelLoading,
  useSelectedChannel,
} from '@/hooks/useSelectedChannel';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
// import useInterval from '@/hooks/useInterval'; // polling 방식 , 너무 많은 요청이 갈까봐 주석처리
import { userListToUserSnippetList } from '@/slices/userList/utils';
import { usePagination } from '@/hooks/usePagination';
import { getMyInfo } from '@/slices/user';

import {
  postListToPostSnippetList,
  searchedPostListToPostSnippetList,
} from '@/slices/postList/utils';
import { searchAllData } from '@/slices/searchedData/thunk';
import { useSelectedSearchedPostData } from '@/hooks/useSelectedSearchedData';
import { setChannel } from '@/slices/channel';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search');

  const userList = useSelectedUserList();
  const { channelId } = useParams();
  const channel = useSelectedChannel();
  const channelLoading = useSelectedChannelLoading();
  const searchedPosts = useSelectedSearchedPostData();
  const posts = useSelectedPostList();
  const postSnippetList = keyword
    ? searchedPostListToPostSnippetList(searchedPosts)
    : postListToPostSnippetList(posts);
  const { paginationedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postSnippetList);
  const myInfo = useSelector((state: RootState) => state.userInfo.authUser);

  const keywordToPostKeyword = (keyword: string) =>
    `"title":"[^"]*${keyword}[^"]*"|"content":"[^"]*${keyword}[^"]*"`;

  const getChannelTitle = () => {
    if (channelLoading) return '로딩중';
    if (!channelId) return '전체 글';
    if (!channel) return '채널을 찾을 수 없습니다.';
    return channel.name;
  };

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
    if (!keyword) return;
    dispatch(searchAllData({ keyword: keywordToPostKeyword(keyword) }));
  }, [dispatch, keyword]);

  useEffect(() => {
    if (!channelId) {
      dispatch(getFullPostList());
      return;
    }
    dispatch(getPostListByChannelId({ channelId }));
    dispatch(setChannel(channelId));
  }, [dispatch, channelId]);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // polling 방식 , 너무 많은 요청이 갈까봐 주석처리
  // useInterval(() => {
  //   dispatch(getUserList());
  // }, 6000);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    dispatch(getMyInfo({ token }));
  }, [navigate, dispatch]);

  return (
    <>
      <MainWrapper>
        <PostContentWrapper>
          <MainFlexWrapper>
            <Text tagType='span' fontType='h2'>
              {getChannelTitle()}
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
