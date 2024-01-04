import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '@/components/Text';
import { RootState, useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import PostCard from '@/components/PostCard';
import { postListToPostSnippetList } from '@/slices/postList/utils';

const UserPostList = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  useEffect(() => {
    if (!userId) return;
    dispatch(getUser({ userId }));
  }, [dispatch, userId]);

  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );
  if (!currentUser) {
    return <></>;
  }
  const { fullName, posts } = currentUser;
  const postSnippetList = postListToPostSnippetList(posts);

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
      <PostCard.Group>
        {postSnippetList.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </PostCard.Group>
    </>
  );
};

export default UserPostList;
