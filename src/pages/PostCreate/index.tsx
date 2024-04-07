import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { FormPageContainer } from '@/pages/PostCreate/style';
import PostForm from '@/pages/PostUpdate/components/PostForm';
import UserInfo from '@/pages/PostUpdate/components/UserInfo';
import { getMyInfo } from '@/slices/user/thunk';
import { useDispatch } from '@/store';

const PostCreatePage = () => {
  const { channelId } = useParams();
  const selectedChannelId = channelId === 'unselected' ? '' : channelId;
  const dispatch = useDispatch();
  const myInfo = useSelectedMyInfo();
  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  return (
    <FormPageContainer>
      <UserInfo fullName={myInfo?.fullName} imageSrc={myInfo?.image} />
      <PostForm channelId={selectedChannelId} />
    </FormPageContainer>
  );
};

export default PostCreatePage;
