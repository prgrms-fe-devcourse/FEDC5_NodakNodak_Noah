import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MailIcon from '@/assets/MailIcon';
import { Button, Input, Text } from '@/components';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import {
  ButtonWrapper,
  ContentWrapper,
  InputWrapper,
  TextWrapper,
  Warning,
} from '@/pages/ProfileEdit/components/style';
import axiosInstance from '@/utils/customAxios';

const UserInfo = () => {
  const currentUser = useSelectedUser();
  const navigate = useNavigate();
  const { userId } = useParams();

  const [warn, setWarn] = useState([false, false]);
  const [warnText, setWarnText] = useState('');
  const [isModified, setIsModified] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    fullName: currentUser?.fullName || '',
    username: currentUser?.username || '',
  });

  useEffect(() => {
    if (currentUser) {
      setUpdatedData({
        fullName: currentUser.fullName,
        username: currentUser.username,
      });
    }
  }, [currentUser]);

  const handleUpdate = async () => {
    const fullNameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/;

    const { fullName, username } = updatedData;
    if (!fullNameRegex.test(fullName)) {
      setWarnText('별명은 2~8자의 영문, 한글, 숫자만 사용 가능합니다.');
      setWarn([true, false]);
      setTimeout(() => {
        setWarn([false, false]);
        setWarnText('');
      }, 3000);
      return;
    }

    if (username.trim().length > 36) {
      setWarnText('36자 미만으로 작성해주세요');
      setWarn([false, true]);
      setTimeout(() => {
        setWarn([false, false]);
        setWarnText('');
      }, 3000);
      return;
    }

    try {
      await axiosInstance.put('settings/update-user', {
        fullName,
        username,
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
    navigate(`/user/${userId}`);
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
          underline
          placeholder='닉네임'
          width='320px'
          fontType='h1'
          required
          value={updatedData.fullName || ''}
          bordertype={warn[0] ? 'error' : 'filled'}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        {warn[0] && <Warning>{warnText}</Warning>}
        <Input
          underline
          placeholder='한줄 소개'
          width='320px'
          fontType='body1'
          value={updatedData.username || ''}
          bordertype={warn[1] ? 'error' : 'filled'}
          onChange={(e) => handleInputChange('username', e.target.value)}
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

export default UserInfo;
