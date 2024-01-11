import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Text from '@/components/common/Text';
import { useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import PostCard from '@/components/Main/PostCard';
import { postListToPostSnippetList } from '@/slices/postList/utils';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import { getPostListByUserId } from '@/slices/postList/thunks';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import theme from '@/styles/theme';

const UserPostList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelectedUser();
  const postList = useSelectedPostList();

  useEffect(() => {
    if (!userId) return;
    dispatch(getUser({ userId }));
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userId) return;
    dispatch(getPostListByUserId({ userId }));
  }, [dispatch, userId]);

  if (!currentUser) return null;
  const { fullName } = currentUser;
  const postSnippetList = postListToPostSnippetList(postList);

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
      <PostCard.Group style={{ width: '60vw', margin: '2rem 0' }}>
        {postSnippetList.length === 0 ? (
          <Text
            tagType='span'
            fontType='h4'
            colorType='black'
            style={{ margin: '8rem 0' }}>
            게시글이 존재하지 않습니다.
          </Text>
        ) : (
          postSnippetList.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })
        )}
      </PostCard.Group>
    </>
  );
};

export default UserPostList;
