import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Text from '@/components/Text';
import { RootState, useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import PostCard from '@/components/PostCard';

const UserPostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );
  if (!currentUser) {
    return <div>Loading...</div>;
  }
  const { fullName, posts } = currentUser;

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
        {posts.map((post) => {
          let title;
          try {
            title = JSON.parse(post.title).title;
          } catch (e) {
            title = post.title;
          }
          return (
            <PostCard
              key={post._id}
              post={{
                title,
                fullName: '',
                avatar: '',
                _id: '',
                image: '',
                count: '',
              }}
            />
          );
        })}
      </PostCard.Group>
    </>
  );
};

export default UserPostList;
