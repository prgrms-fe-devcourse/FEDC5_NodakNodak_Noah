import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  UserButtonContainer,
  UserInfoWrapper,
  UserInfoContainer,
  AvatarWrapper,
} from '@/components/User/UserInfo/style';
import GrassTable from '@/components/User/GrassTable';
import { Avatar, Button, Text } from '@/components/common';
import { useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import { useSelectedFollowData } from '@/hooks/useSelectedFollowData';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import Tooltip from '@/components/common/Tooltip';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
import { getUserList } from '@/slices/userList/thunk';
import ImageUploader from '@/components/common/Button/ImageUploadButton';

const MESSAGE = {
  NO_USER_MESSAGE: '사용자가, 없습니다.',
  UNKNOWN_USER_MESSAGE: 'Unknown User',
  NO_INTRODUCTION_MESSAGE: '한줄 소개가 없습니다',
};

const UserInfo = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { isFollower, isFollowing } = useSelectedFollowData();
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    }
    dispatch(getUserList());
  }, [dispatch, userId, isFollower, isFollowing]);

  const userList = useSelectedUserList();

  const getFullNames = (userIds: string[]) => {
    if (userIds.length === 0) {
      return MESSAGE.NO_USER_MESSAGE;
    }
    return userIds
      .map((userId) => {
        const user = userList.find((user) => user._id === userId);

        return user ? user.fullName : MESSAGE.UNKNOWN_USER_MESSAGE;
      })
      .join(', ');
  };

  const currentUser = useSelectedUser();
  if (!currentUser) return null;
  const { image, fullName, username, followers, following, posts } =
    currentUser;

  return (
    <UserInfoContainer>
      <AvatarWrapper>
        <Avatar
          src={userImage === '' ? image : userImage}
          alt={fullName}
          size='large'
        />
        <ImageUploader setImage={setUserImage} apiParam='users/upload-photo'>
          이미지 변경
        </ImageUploader>
      </AvatarWrapper>
      <UserInfoWrapper>
        <Text tagType='span' fontType='h1' colorType='black'>
          {fullName}
        </Text>
        <Text tagType='span' fontType='body1' colorType='black'>
          {username || MESSAGE.NO_INTRODUCTION_MESSAGE}
        </Text>
        <UserButtonContainer>
          <Tooltip
            direction='bottom'
            message={getFullNames(
              followers.map((follower) => follower.follower),
            )}
            hasArrow
            type='hover'>
            <a>
              <Button size='regular' styleType='ghost'>
                {followers.length} 팔로워
              </Button>
            </a>
          </Tooltip>
          <Tooltip
            direction='bottom'
            message={getFullNames(following.map((followee) => followee.user))}
            hasArrow
            type='hover'>
            <a>
              <Button size='regular' styleType='ghost'>
                {following.length} 팔로잉
              </Button>
            </a>
          </Tooltip>
          <Button size='regular' styleType='ghost'>
            {posts.length} 포스트
          </Button>
        </UserButtonContainer>
        <GrassTable />
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};

export default UserInfo;
