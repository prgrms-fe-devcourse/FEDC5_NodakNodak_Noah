import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '@/components/Text';
import { RootState, useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import PostCard from '@/components/PostCard';
import { postListToPostSnippetList } from '@/slices/postList/utils';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import { getPostListByUserId } from '@/slices/postList/thunks';

const UserPostList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => {
    if (!userId) return;
    dispatch(getUser({ userId }));
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userId) return;
    dispatch(getPostListByUserId({ userId }));
  }, [dispatch, userId]);

  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );

  const postList = useSelectedPostList();

  if (!currentUser) {
    return <></>;
  }
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
        colorNumber='400'>
        님의 게시글 목록
      </Text>
      <PostCard.Group style={{ width: '80vw', margin: '2rem 0' }}>
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
