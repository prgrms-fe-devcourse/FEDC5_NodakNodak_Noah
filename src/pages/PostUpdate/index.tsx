import { useEffect } from 'react';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { FormPageContainer } from '@/pages/PostCreate/style';
import UpdateForm from '@/pages/PostUpdate/components/UpdateForm';
import UserInfo from '@/pages/PostUpdate/components/UserInfo';
import { getMyInfo } from '@/slices/user/thunk';
import { useDispatch } from '@/store';

const PostUpdatePage = () => {
  const dispatch = useDispatch();
  const myInfo = useSelectedMyInfo();

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <FormPageContainer>
      <UserInfo fullName={myInfo?.fullName} imageSrc={myInfo?.image} />
      <UpdateForm />
    </FormPageContainer>
  );
};

export default PostUpdatePage;
