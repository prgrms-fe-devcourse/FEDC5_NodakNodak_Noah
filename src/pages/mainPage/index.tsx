import { MainWrapper, PostContentWrapper, MainFlexWrapper } from './StyledMain';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import UserListCard from '@/components/UserListCard';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { useDispatch } from '@/store';
import {
  getFullPostList,
  getPostListByChannelId,
} from '@/slices/postList/thunks';
import { getUserList } from '@/slices/userList/thunk';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import {
  useSelectedChannelStatus,
  useSelectedChannel,
} from '@/hooks/useSelectedChannel';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
import { userListToUserSnippetList } from '@/slices/userList/utils';
import { usePagination } from '@/hooks/usePagination';
import { getMyInfo } from '@/slices/user';
import { postListToPostSnippetList } from '@/slices/postList/utils';
import { searchAllData } from '@/slices/searchedData/thunk';
import { useSelectedSearchedPostData } from '@/hooks/useSelectedSearchedData';
import useInterval from '@/hooks/useInterval';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';

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
  const { paginationedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postSnippetList);

  const getChannelTitle = () => {
    if (channelStatus === 'loading') return '로딩중';
    if (channelStatus === 'failed') return '채널을 찾을 수 없습니다.';
    if (!channelId && channelStatus === 'idle') return '전체 글';
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
    navigate(`/write/${channelId}`);
  };

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    dispatch(getMyInfo({ token }));
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
            onPageChange={handlePageChange}
          />
        </PostContentWrapper>
        <UserListCard users={userListToUserSnippetList(userList, myInfo)} />
      </MainWrapper>
    </>
  );
};

export default Main;
