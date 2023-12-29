import GrassTable from './GrassTable';
import styled from 'styled-components';
import Avatar from '@/components/Avatar';
import Text from '@/components/Text';
import Button from '@/components/Button';

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

const UserInfo = () => {
  const { image, username, bio, follower, following, posts } = sampleData;

  return (
    <>
      <UserInfoContainer>
        <Avatar src={image} alt={username} size='large' />
        <UserInfoWrapper>
          <Text tagType={'div'} fontType={'h1'} colorType={'black'}>
            {username}
          </Text>
          <Text tagType={'div'} fontType={'body1'} colorType={'black'}>
            {bio === '' ? '한줄 소개가 없습니다' : bio}
          </Text>
          <UserButtonContainer>
            <Button size='regular' styleType='ghost'>
              {follower} 팔로워
            </Button>
            <Button size='regular' styleType='ghost'>
              {following} 팔로잉
            </Button>
            <Button size='regular' styleType='ghost'>
              {posts} 포스트
            </Button>
          </UserButtonContainer>
          <GrassTable />
        </UserInfoWrapper>
      </UserInfoContainer>
    </>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  gap: 20px;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
const UserButtonContainer = styled.div`
  display: flex;
`;

export default UserInfo;
