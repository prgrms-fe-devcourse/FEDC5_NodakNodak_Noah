import UserInfo from './UserInfo';
import UserPostList from './UserPostList';
import SettingFollowButton from './SettingFollowButton';
import styled from 'styled-components';

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
  width: 80vw;
  margin: 3rem auto;
`;
const RightButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default UserPage;
