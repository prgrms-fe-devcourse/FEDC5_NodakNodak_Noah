import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Container,
  CardWrapper,
  ButtonWrapper,
  ContentContainer,
  AvatarWrapper,
  InputWrapper,
  TextWrapper,
} from '@/pages/SettingPage/style';
import { getUser } from '@/slices/user';
import { RootState, useDispatch } from '@/store';
import { Avatar, Input, Text, Button } from '@/components/common';

import ImageUploader from '@/components/common/Button/ImageUploadButton';
import MailIcon from '@/assets/MailIcon';
import axiosInstance from '@/utils/customAxios';

const Setting = () => {
  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );

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
      if (updatedData.fullName.length < 2) {
        alert('닉네임은 2글자 이상이어야 합니다.');
        return;
      }
      await axiosInstance.put('settings/update-user', {
        fullName: updatedData.fullName,
        username: updatedData.username,
      });
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
              maxLength={8}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
            <Input
              underline={true}
              placeholder='한줄 소개'
              width='80%'
              fontType='body1'
              value={updatedData.username || ''}
              maxLength={20}
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
