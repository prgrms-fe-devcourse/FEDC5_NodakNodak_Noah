import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  AvatarWrapper,
  ButtonWrapper,
  CardWrapper,
  Container,
  ContentContainer,
  InputWrapper,
  TextWrapper,
} from '@/components/Setting/style';
import { getUser } from '@/slices/user';
import { useDispatch } from '@/store';
import { Button, Avatar, Input, Text } from '@/components/common';
import ImageUploader from '@/components/common/Button/ImageUploadButton';
import MailIcon from '@/assets/MailIcon';
import { useSelectedUser } from '@/hooks/useSelectedUser';

const Setting = () => {
  const currentUser = useSelectedUser();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { state } = useLocation();

  const [profileImage, setProfileImage] = useState(state || '');
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
    try {
      await axios.put(
        'https://kdt.frontend.5th.programmers.co.kr:5003/settings/update-user',
        {
          fullName: updatedData.fullName,
          username: updatedData.username,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
          },
        },
      );
      navigate(`/user/${userId}`);
    } catch (error) {
      alert(error);
    }
  };

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

  const { fullName, email } = currentUser;

  return (
    <Container>
      <CardWrapper>
        <ButtonWrapper>
          <Button styleType='danger' isArrow={true} onClick={handleCancel}>
            취소하기
          </Button>
          <Button
            event={isModified ? 'enabled' : 'disabled'}
            disabled={!isModified}
            isArrow={true}
            onClick={handleUpdate}>
            수정하기
          </Button>
        </ButtonWrapper>
        <ContentContainer>
          <AvatarWrapper>
            <Avatar src={profileImage} size='large' alt={fullName} />
            <ImageUploader
              size='wide'
              setImage={setProfileImage}
              apiParam={'users/upload-photo'}>
              이미지 선택
            </ImageUploader>
          </AvatarWrapper>
          <InputWrapper>
            <Input
              underline={true}
              placeholder='닉네임'
              width='80%'
              fontType='h1'
              required={true}
              value={updatedData.fullName || ''}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
            <Input
              underline={true}
              placeholder='한줄 소개'
              width='80%'
              fontType='body1'
              value={updatedData.username || ''}
              onChange={(e) => handleInputChange('username', e.target.value)}
            />
            <TextWrapper>
              <MailIcon />
              <Text tagType='span' fontType='body1' colorType='black'>
                {email}
              </Text>
            </TextWrapper>
          </InputWrapper>
        </ContentContainer>
      </CardWrapper>
    </Container>
  );
};

export default Setting;
