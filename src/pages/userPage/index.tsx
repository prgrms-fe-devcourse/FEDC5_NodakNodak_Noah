import UserInfo from './UserInfo';
import UserPostList from './UserPostList';
import styled from 'styled-components';
import Button from '@/components/Button';

const UserPage = () => {
  return (
    <>
      <RightButton>
        <Button styleType='ghost'>프로필 수정</Button>
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
