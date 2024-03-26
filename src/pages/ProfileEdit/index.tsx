import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { Container, CardWrapper } from '@/pages/ProfileEdit/style';
import { getUser } from '@/slices/user/thunk';
import { useDispatch } from '@/store';
import { Avatar } from '@/components';
import { useSelectedUser } from '@/hooks/useSelectedUser';

const Setting = () => {
  const currentUser = useSelectedUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      dispatch(getUser({ userId }));
    } else {
      alert('올바르지 않은 접근입니다.');
      navigate('/home');
    }
  }, [dispatch, navigate, userId]);

  if (!currentUser) {
    return <>Loading...</>;
  }

  const { fullName } = currentUser;

  return (
    <Container>
      <CardWrapper>
        <Avatar src={currentUser.image} size='large' alt={fullName} />
        <Outlet />
      </CardWrapper>
    </Container>
  );
};

export default Setting;
