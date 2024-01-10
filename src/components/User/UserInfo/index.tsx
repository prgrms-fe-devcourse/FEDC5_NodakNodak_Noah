import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  UserButtonContainer,
  UserInfoWrapper,
  UserInfoContainer,
} from '@/components/User/UserInfo/style';
import GrassTable from '@/components/User/GrassTable';
import { Avatar, Button, Text } from '@/components/_common';
import { RootState, useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import { useSelectedFollowData } from '@/hooks/useSelectedFollowData';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { isFollower, isFollowing } = useSelectedFollowData();
  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    }
  }, [dispatch, userId, isFollower, isFollowing]);

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
            {username || '한줄 소개가 없습니다'}
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

export default UserInfo;
