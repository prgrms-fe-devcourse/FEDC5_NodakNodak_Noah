import UserInfo from './UserInfo';
import UserPostList from './UserPostList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

const UserPage = () => {
  const navigate = useNavigate();
  const setting = () => {
    navigate('./setting');
  };

  return (
    <>
      <RightButton>
        <Button styleType='ghost' onClick={setting}>
          프로필 수정
        </Button>
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
