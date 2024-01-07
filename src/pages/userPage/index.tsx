import UserInfo from './UserInfo';
import UserPostList from './UserPostList';
import SettingFollowButton from './SettingFollowButton';
import styled from 'styled-components';

const UserPage = () => {
  return (
    <>
      <RightButton>
        <SettingFollowButton />
      </RightButton>
      <UserInfo />
      <UserPostList />
    </>
  );
};

const RightButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default UserPage;
