import { MainWrapper, PostContentWrapper, MainFlexWrapper } from './StyledMain';
import { useState } from 'react';

import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import UserListCard from '@/components/UserListCard';

import { mockPosts } from '@/components/PostCard/mockPosts';
import { mockUsers } from '@/components/UserListCard/mockUsers';
import { TempPost } from '@/types/PostCardTypes';

import Text from '@/components/Text';
import Button from '@/components/Button';

const MockTitle = '연예';

const Main = () => {
  const [page, setPage] = useState(1);

  const limit = 12;
  const posts: TempPost[] = mockPosts.slice((page - 1) * limit, page * limit);
  const totalPage = Math.ceil(mockPosts.length / limit);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPage) return;

    setPage(page);
  };

  return (
    <MainWrapper>
      <PostContentWrapper>
        <MainFlexWrapper>
          <Text tagType='span' fontType='h2'>
            {`${MockTitle} 채널`}
          </Text>
          <Button styleType='ghost' size='small'>
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
  );
};

export default Main;
