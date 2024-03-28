import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Text from '@/components/Text';
import { useDispatch } from '@/store';
import { getUser } from '@/slices/user/thunk';
import PostCard from '@/pages/Main/components/PostList/PostCard';
import Pagination from '@/components/Pagination';
import { getPostListByUserId } from '@/slices/postList/thunks';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import { usePagination } from '@/hooks/usePagination';
import theme from '@/styles/theme';
import { PostCardWrapper } from '@/pages/Main/components/PostList/style';
import { useSelectedPostListByUser } from '@/hooks/useSelectedPostListByUser';

const UserPostList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelectedUser();
  const postList = useSelectedPostListByUser();

  const { paginatedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postList, 4);

  useEffect(() => {
    if (!userId) return;
    dispatch(getUser({ userId }));
    dispatch(getPostListByUserId({ userId }));
  }, [dispatch, userId]);

  if (!currentUser) return <div>Loading...</div>;
  const { fullName } = currentUser;

  return (
    <>
      <Text tagType='span' fontType='h4' colorType='black'>
        {fullName}
      </Text>
      <Text
        tagType='span'
        fontType='body1'
        colorType='grayscale'
        colorNumber={theme.isDark ? '200' : '400'}>
        님의 최근 게시글
      </Text>
      <PostCardWrapper
        style={{ width: '80vw', margin: '2rem 0', maxWidth: '1440px' }}>
        {paginatedPostList.length === 0 ? (
          <Text
            tagType='span'
            fontType='h4'
            colorType='black'
            style={{ margin: '8rem 0' }}>
            게시글이 존재하지 않습니다.
          </Text>
        ) : (
          paginatedPostList.map(({ _id, image, title, author, comments }) => {
            return (
              <PostCard
                key={_id}
                postId={_id}
                image={image}
                title={title}
                author={author}
                comments={comments}
              />
            );
          })
        )}
      </PostCardWrapper>
      <Pagination
        page={currentPage}
        totalPage={totalPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default UserPostList;
