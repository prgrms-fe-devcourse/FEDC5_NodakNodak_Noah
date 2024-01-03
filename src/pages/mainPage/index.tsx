import { MainWrapper, PostContentWrapper, MainFlexWrapper } from './StyledMain';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import UserListCard from '@/components/UserListCard';
import { mockPosts } from '@/components/PostCard/mockPosts';
import { mockUsers } from '@/components/UserListCard/mockUsers';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { TempPost } from '@/components/PostCard/PostCardTypes';
import { RootState } from '@/store';

const Main = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const channel = useSelector(
    (state: RootState) => state.channel.currentChannel,
  );
  const channelLoading = useSelector(
    (state: RootState) => state.channel.isLoading,
  );

  const limit = 12;
  const posts: TempPost[] = mockPosts.slice((page - 1) * limit, page * limit);
  const totalPage = Math.ceil(mockPosts.length / limit);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPage) return;
    setPage(page);
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

  return (
    <>
      <MainWrapper>
        <PostContentWrapper>
          <MainFlexWrapper>
            <Text tagType='span' fontType='h2'>
              {!channelLoading && channel ? `${channel.name} 채널` : '채널'}
            </Text>
            <Button styleType='ghost' size='small' onClick={handleWriteClick}>
              글 쓰기
            </Button>
          </MainFlexWrapper>
          <PostCard.Group>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </PostCard.Group>
          <Pagination
            page={page}
            totalPage={totalPage}
            handlePageChange={handlePageChange}
          />
        </PostContentWrapper>
        <UserListCard users={mockUsers} />
      </MainWrapper>
    </>
  );
};

export default Main;
