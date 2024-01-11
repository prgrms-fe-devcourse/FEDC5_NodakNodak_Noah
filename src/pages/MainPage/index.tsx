import { MouseEvent, useEffect } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import {
  MainWrapper,
  PostContentWrapper,
  MainFlexWrapper,
} from '@/pages/MainPage/style';

import UserListCard from '@/components/Main/UserListCard';
import PostCard from '@/components/Main/PostCard';
import Pagination from '@/components/Main/Pagination';
import { Text, Button } from '@/components/common';

import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user';
import {
  getFullPostList,
  getPostListByChannelId,
} from '@/slices/postList/thunks';
import { postListToPostSnippetList } from '@/slices/postList/utils';
import { searchAllData } from '@/slices/searchedData/thunk';
import { getUserList } from '@/slices/userList/thunk';

import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import {
  useSelectedChannelStatus,
  useSelectedChannel,
} from '@/hooks/useSelectedChannel';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
import { usePagination } from '@/hooks/usePagination';
import { useSelectedSearchedPostData } from '@/hooks/useSelectedSearchedData';
import useInterval from '@/hooks/useInterval';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { userListToUserSnippetList } from '@/slices/userList/utils';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const { channelId } = useParams();

  const myInfo = useSelectedMyInfo();
  const userList = useSelectedUserList();
  const channel = useSelectedChannel();
  const channelStatus = useSelectedChannelStatus();
  const posts = useSelectedPostList();
  const searchedPosts = useSelectedSearchedPostData();

  const postList = keyword ? searchedPosts : posts;
  const postSnippetList = postListToPostSnippetList(postList);
  const { paginatedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postSnippetList, 9);

  const getChannelTitle = () => {
    if (channelStatus === 'loading') return '로딩중';
    if (channelStatus === 'failed') return '채널을 찾을 수 없습니다.';
    if (!channelId && channelStatus === 'idle') return '전체 글';
    if (!channel) return '채널을 찾을 수 없습니다.';
    return channel.name;
  };

  const handleWriteClick = (e: MouseEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!token) {
      alert('로그인이 필요한 서비스 입니다.');
      return;
    }
    navigate(`/write/${channelId ? channelId : 'unselected'}`);
  };

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    dispatch(getMyInfo());
  }, [dispatch]);

  useEffect(() => {
    if (!keyword) return;
    const postKeyword = `"title":"[^"]*${keyword}[^"]*"|"content":"[^"]*${keyword}[^"]*"`;
    dispatch(searchAllData({ keyword: postKeyword }));
  }, [dispatch, keyword]);

  useEffect(() => {
    if (!channelId) {
      dispatch(getFullPostList());
      return;
    }
    dispatch(getPostListByChannelId({ channelId }));
  }, [dispatch, channelId]);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  useInterval(() => {
    dispatch(getUserList());
  }, 60000);

  return (
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
          {paginatedPostList.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </PostCard.Group>
        <Pagination
          page={currentPage}
          totalPage={totalPage}
          onPageChange={handlePageChange}
        />
      </PostContentWrapper>
      <UserListCard users={userListToUserSnippetList(userList, myInfo)} />
    </MainWrapper>
  );
};

export default Main;
