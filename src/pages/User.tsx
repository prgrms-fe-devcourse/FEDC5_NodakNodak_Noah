import styled from 'styled-components';

import SettingFollowButton from '@/components/User/SettingFollowButton';
import UserPostList from '@/components/User/UserPostList';
import UserInfo from '@/components/User/UserInfo';

const UserPage = () => {
  return (
    <UserInfoWrapper>
      <RightButton>
        <SettingFollowButton />
      </RightButton>
      <UserInfo />
      <UserPostList />
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  width: 60vw;
  max-width: 1440px;
  margin: 3rem auto;
`;
const RightButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default UserPage;
