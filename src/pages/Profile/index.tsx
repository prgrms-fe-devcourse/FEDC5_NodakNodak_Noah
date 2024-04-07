import FollowButton from '@/pages/Profile/components/FollowButton';
import UserInfo from '@/pages/Profile/components/UserInfo';
import UserPostList from '@/pages/Profile/components/UserPostList';
import { RightButton, UserInfoWrapper } from '@/pages/Profile/style';

const UserPage = () => {
  return (
    <UserInfoWrapper>
      <RightButton>
        <FollowButton />
      </RightButton>
      <UserInfo />
      <UserPostList />
    </UserInfoWrapper>
  );
};

export default UserPage;
