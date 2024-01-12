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
import ImageUploader from '@/components/common/Button/ImageUploadButton';
import { useDispatch } from '@/store';
import { getUser } from '@/slices/user';
import { useSelectedFollowData } from '@/hooks/useSelectedFollowData';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import Tooltip from '@/components/Common/Tooltip';
import { useSelectedUserList } from '@/hooks/useSelectedUserList';
import { getUserList } from '@/slices/userList/thunk';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { isFollower, isFollowing } = useSelectedFollowData();
  const currentUser = useSelectedUser();

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    }
    dispatch(getUserList());
    dispatch(getUserList());
  }, [dispatch, userId, isFollower, isFollowing]);

  const [profileImage, setProfileImage] = useState('');

  const userList = useSelectedUserList();

  const getFullNames = (userIds: string[]) =>
    userIds
      .map((userId) => {
        const user = userList.find((user) => user._id === userId);

        return user ? user.fullName : 'Unknown User';
      })
      .join(', ');

  if (!currentUser) return null;

  const { image, fullName, username, followers, following, posts } =
    currentUser;

  return (
    <UserInfoContainer>
      <AvatarWrapper>
        <Avatar src={profileImage || image} alt={fullName} size='large' />
        <ImageUploader
          size='wide'
          setImage={setProfileImage}
          apiParam={'users/upload-photo'}>
          이미지 선택
        </ImageUploader>
      </AvatarWrapper>
      <UserInfoWrapper>
        <Text tagType='span' fontType='h1' colorType='black'>
          {fullName}
        </Text>
        <Text tagType='span' fontType='body1' colorType='black'>
          {username || '한줄 소개가 없습니다'}
        </Text>
        <UserButtonContainer>
          <Tooltip
            direction='bottom'
            message={getFullNames(followers.map((follower) => follower.user))}
            hasArrow={true}
            type='click'>
            <a>
              <Button
                size='regular'
                styleType='ghost'
                style={{ cursor: 'default' }}>
                {followers.length} 팔로워
              </Button>
            </a>
          </Tooltip>
          <Tooltip
            direction='bottom'
            message={getFullNames(following.map((followee) => followee.user))}
            hasArrow={true}
            type='click'>
            <a>
              <Button
                size='regular'
                styleType='ghost'
                style={{ cursor: 'default' }}>
                {following.length} 팔로잉
              </Button>
            </a>
          </Tooltip>
          <Button
            size='regular'
            styleType='ghost'
            style={{ cursor: 'default' }}>
            {posts.length} 포스트
          </Button>
        </UserButtonContainer>
        <GrassTable />
      </UserInfoWrapper>
    </UserInfoContainer>
  );
};

export default UserInfo;
