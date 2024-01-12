import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import {
  Container,
  CardWrapper,
  AvatarWrapper,
} from '@/pages/SettingPage/style';
import { getUser } from '@/slices/user';
import { useDispatch } from '@/store';
import { Avatar } from '@/components/common';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import ImageUploader from '@/components/common/Button/ImageUploadButton';

const Setting = () => {
  const currentUser = useSelectedUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { state } = useLocation();

  const [profileImage, setProfileImage] = useState(state || '');

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    } else {
      alert('올바르지 않은 접근입니다.');
      navigate(-1);
    }
  }, [dispatch, navigate, userId]);

  if (!currentUser) {
    return <>Loading...</>;
  }

  const { fullName } = currentUser;

  return (
    <Container>
      <CardWrapper>
        <AvatarWrapper>
          <Avatar src={profileImage} size='large' alt={fullName} />
          <ImageUploader
            size='wide'
            setImage={setProfileImage}
            apiParam={'users/upload-photo'}>
            이미지 선택
          </ImageUploader>
        </AvatarWrapper>
        <Outlet />
      </CardWrapper>
    </Container>
  );
};

export default Setting;
