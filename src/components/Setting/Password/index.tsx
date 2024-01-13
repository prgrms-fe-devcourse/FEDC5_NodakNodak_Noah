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

const Password = () => {
  const currentUser = useSelectedUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [isModified, setIsModified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    } else {
      alert('올바르지 않은 접근입니다.');
      navigate(-1);
    }
  }, [dispatch, navigate, userId]);

  const handleCancel = () => {
    navigate(-1);
  };

  if (!currentUser) {
    return <>Loading...</>;
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setIsModified(true);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setIsModified(true);
  };

  const handlePasswordUpdate = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('비밀번호는 최소 8자리이며, 영문자와 숫자의 조합이 필요합니다.');
      return;
    }
    try {
      await axiosInstance.put('settings/update-password', {
        password,
      });
      navigate(`/user/${userId}`);
    } catch (error) {
      alert(error);
    }
  };
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
          onClick={handlePasswordUpdate}>
          변경하기
        </Button>
      </ButtonWrapper>
      <InputWrapper>
        <Input
          underline={true}
          placeholder='변경 할 비밀번호'
          width='320px'
          fontType='body1'
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <Input
          underline={true}
          placeholder='비밀번호 확인'
          width='320px'
          fontType='body1'
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
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

export default Password;
