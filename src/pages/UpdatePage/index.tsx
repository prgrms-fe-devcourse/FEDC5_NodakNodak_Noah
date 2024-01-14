import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import UpdateForm from '@/components/Post/Edit/UpdateForm';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import { getMyInfo } from '@/slices/user';
import UserInfo from '@/components/Post/Edit/UserInfo';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { FormPageContainer } from '@/pages/PostPage/style';

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
