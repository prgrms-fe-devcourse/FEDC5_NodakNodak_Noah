import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  InputWrapper,
  TextWrapper,
  ContentWrapper,
} from '@/components/Setting/style';
import { getUser } from '@/slices/user';
import { useDispatch } from '@/store';
import { Input, Text, Button } from '@/components/common';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import MailIcon from '@/assets/MailIcon';
import axiosInstance from '@/utils/customAxios';

const UserInfo = () => {
  const currentUser = useSelectedUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [isModified, setIsModified] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    fullName: currentUser?.fullName || '',
    username: currentUser?.username || '',
  });

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    } else {
      alert('올바르지 않은 접근입니다.');
      navigate(-1);
    }
  }, [dispatch, navigate, userId]);

  useEffect(() => {
    if (currentUser) {
      setUpdatedData({
        fullName: currentUser.fullName,
        username: currentUser.username,
      });
    }
  }, [currentUser]);

  const handleUpdate = async () => {
    const userNameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/;
    if (!userNameRegex.test(updatedData.username)) {
      alert('별명은 2~8자의 영문, 한글, 숫자만 사용 가능합니다.');
      return;
    }
    try {
      await axiosInstance.put('settings/update-user', {
        fullName: updatedData.fullName,
        username: updatedData.username,
      });
      navigate(`/user/${userId}`);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setUpdatedData({
        fullName: currentUser.fullName,
        username: currentUser.username,
      });
    }
  }, [currentUser]);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleInputChange = (field: string, value: string) => {
    setUpdatedData({ ...updatedData, [field]: value });
    setIsModified(true);
  };

  if (!currentUser) {
    return <>Loading...</>;
  }
  const { email } = currentUser;

  return (
    <ContentWrapper>
      <ButtonWrapper>
        <Button styleType='danger' onClick={handleCancel}>
          취소하기
        </Button>
        <Button
          event={isModified ? 'enabled' : 'disabled'}
          disabled={!isModified}
          onClick={handleUpdate}>
          변경하기
        </Button>
      </ButtonWrapper>
      <InputWrapper>
        <Input
          underline={true}
          placeholder='닉네임'
          width='320px'
          fontType='h1'
          required={true}
          value={updatedData.fullName || ''}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <Input
          underline={true}
          placeholder='한줄 소개'
          width='320px'
          fontType='body1'
          value={updatedData.username || ''}
          onChange={(e) => handleInputChange('username', e.target.value)}
        />
      </InputWrapper>
      <TextWrapper>
        <MailIcon />
        <Text tagType='span' fontType='body1' colorType='black'>
          {email}
        </Text>
      </TextWrapper>
    </ContentWrapper>
  );
};

export default UserInfo;
