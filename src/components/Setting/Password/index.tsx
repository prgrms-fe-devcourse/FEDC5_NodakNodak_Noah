import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  InputWrapper,
  TextWrapper,
  ContentWrapper,
  Warning,
} from '@/components/Setting/style';
import { Input, Text, Button } from '@/components/common';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import MailIcon from '@/assets/MailIcon';
import axiosInstance from '@/utils/customAxios';

const Password = () => {
  const currentUser = useSelectedUser();
  const navigate = useNavigate();
  const { userId } = useParams();

  const [isModified, setIsModified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [warn, setWarn] = useState([false, false]);
  const [warnText, setWarnText] = useState('');

  const handleCancel = () => {
    navigate(`/user/${userId}`);
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
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setWarnText(
        '비밀번호는 최소 8자리이며, 영문자와 숫자의 조합이 필요합니다',
      );
      setWarn([true, false]);
      setTimeout(() => {
        setWarn([false, false]);
        setWarnText('');
      }, 3000);
      return;
    }

    if (password !== confirmPassword) {
      setWarnText('비밀번호가 일치하지 않습니다.');
      setWarn([true, true]);
      setTimeout(() => {
        setWarn([false, false]);
        setWarnText('');
      }, 3000);
      return;
    }

    try {
      await axiosInstance.put('settings/update-password', {
        password,
      });
      alert('비밀번호가 변경되었습니다.');
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
          type='password'
          underline={true}
          placeholder='변경 할 비밀번호'
          width='320px'
          fontType='body1'
          value={password}
          bordertype={warn[0] ? 'error' : 'filled'}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        {warn[0] && !warn[1] && <Warning>{warnText}</Warning>}
        <Input
          type='password'
          underline={true}
          placeholder='비밀번호 확인'
          width='320px'
          fontType='body1'
          value={confirmPassword}
          bordertype={warn[1] ? 'error' : 'filled'}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
        />
        {warn[1] && <Warning>{warnText}</Warning>}
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
