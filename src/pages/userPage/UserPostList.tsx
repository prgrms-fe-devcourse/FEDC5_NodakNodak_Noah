import styled from 'styled-components';
import Text from '@/components/Text';
import Card from '@/components/Card';

const sampleData = {
  image: 'https://i.pravatar.cc/300',
  isOnline: true,
  isFollowing: false,
  username: 'minsu',
  bio: '',
  follower: 10,
  following: 13,
  posts: 4,
  _id: Math.random().toString() + Date.now().toString(),
};

const UserPostList = () => {
  const { username } = sampleData;

  return (
    <>
      <Text tagType={'div'} fontType={'h4'} colorType={'black'}>
        {username} 님의 최근 게시글
      </Text>
      <PostContainer>
        {Array(4)
          .fill(0)
          .map(() => (
            <Card width={'280px'} height={'280px'} shadowType='medium' />
          ))}
      </PostContainer>
    </>
  );
};

const PostContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 48px;
`;

export default UserPostList;
