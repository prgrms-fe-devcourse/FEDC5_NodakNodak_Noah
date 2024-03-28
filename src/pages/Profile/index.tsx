import { UserInfoWrapper, RightButton } from '@/pages/Profile/style';
import FollowButton from '@/pages/Profile/components/FollowButton';
import UserPostList from '@/pages/Profile/components/UserPostList';
import UserInfo from '@/pages/Profile/components/UserInfo';

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
