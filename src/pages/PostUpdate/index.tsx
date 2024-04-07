import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { FormPageContainer } from '@/pages/PostCreate/style';
import UpdateForm from '@/pages/PostUpdate/components/UpdateForm';
import UserInfo from '@/pages/PostUpdate/components/UserInfo';
import { getPostDetail } from '@/slices/postDetail/thunk';
import { getMyInfo } from '@/slices/user/thunk';
import { useDispatch } from '@/store';

const PostUpdatePage = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const myInfo = useSelectedMyInfo();
  useEffect(() => {
    dispatch(getPostDetail({ postId }));
    dispatch(getMyInfo());
  }, [dispatch, postId]);

  return (
    <FormPageContainer>
      <UserInfo fullName={myInfo?.fullName} imageSrc={myInfo?.image} />
      <UpdateForm postId={postId} />
    </FormPageContainer>
  );
};

export default PostUpdatePage;
