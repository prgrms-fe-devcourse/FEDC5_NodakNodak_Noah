import UserInfo from './UserInfo';
import UserPostList from './UserPostList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '@/components/Button';
import Setting from '@/pages/SettingModal/Setting';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
    navigate('/user/setting');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(-1);
  };

  return (
    <>
      <RightButton>
        <Button styleType='ghost' onClick={openModal}>
          프로필 수정
        </Button>
      </RightButton>
      <UserInfo />
      <UserPostList />

      {isModalOpen && (
        <div>
          <div onClick={closeModal}>Close</div>
          <Setting />
        </div>
      )}
    </>
  );
};

const RightButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default UserPage;
