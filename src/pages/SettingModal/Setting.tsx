import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getUser } from '@/slices/user';
import { RootState, useDispatch } from '@/store';
import theme from '@/styles/theme';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import ImageUploader from '@/components/Button/ImageUploadButton';
import Input from '@/components/Input';
import MailIcon from '@/assets/MailIcon';
import Text from '@/components/Text';

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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary[100]};
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 600px;
  padding: 2rem 2rem 4rem 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export default Setting;
