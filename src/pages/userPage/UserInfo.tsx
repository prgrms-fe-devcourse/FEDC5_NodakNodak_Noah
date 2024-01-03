import GrassTable from './GrassTable';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';
import Avatar from '@/components/Avatar';
import Text from '@/components/Text';
import Button from '@/components/Button';
import { RootState, useDispatch } from '@/store';
import { getUser } from '@/slices/user';

const UserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isUserPage = window.location.pathname.startsWith('/user');
    if (isUserPage) {
      dispatch(getUser());
    }
  }, []);

  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );
  if (!currentUser) {
    return <></>;
  }
  const { image, fullName, username, followers, following, posts } =
    currentUser;

  return (
    <>
      <UserInfoContainer>
        <Avatar src={image} alt={fullName} size='large' />
        <UserInfoWrapper>
          <Text tagType='span' fontType='h1' colorType='black'>
            {fullName}
          </Text>
          <Text tagType='span' fontType='body1' colorType='black'>
            {username === '' ? '한줄 소개가 없습니다' : username}
          </Text>
          <UserButtonContainer>
            <Button size='regular' styleType='ghost'>
              {followers.length} 팔로워
            </Button>
            <Button size='regular' styleType='ghost'>
              {following.length} 팔로잉
            </Button>
            <Button size='regular' styleType='ghost'>
              {posts.length} 포스트
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
