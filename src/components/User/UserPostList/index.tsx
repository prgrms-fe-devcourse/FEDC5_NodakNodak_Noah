import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Text from '@/components/common/Text';
import { useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import PostCard from '@/components/Main/PostCard';
import Pagination from '@/components/Main/Pagination';
import { postListToPostSnippetList } from '@/slices/postList/utils';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import { getPostListByUserId } from '@/slices/postList/thunks';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import { usePagination } from '@/hooks/usePagination';
import theme from '@/styles/theme';

const UserPostList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelectedUser();
  const postList = useSelectedPostList();

  const postSnippetList = postListToPostSnippetList(postList);
  const { paginatedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postSnippetList, 4);

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
      <PostCard.Group
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
          paginatedPostList.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })
        )}
      </PostCard.Group>
      <Pagination
        page={currentPage}
        totalPage={totalPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default UserPostList;
