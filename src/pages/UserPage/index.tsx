import { UserInfoWrapper, RightButton } from '@/pages/UserPage/style';
import FollowButton from '@/components/User/FollowButton';
import UserPostList from '@/components/User/UserPostList';
import UserInfo from '@/components/User/UserInfo';

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
