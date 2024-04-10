import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Avatar } from '@/components';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import { CardWrapper, Container } from '@/pages/ProfileEdit/style';
import { getUser } from '@/slices/user/thunk';
import { useDispatch } from '@/store';

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
      navigate('/home/all');
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
