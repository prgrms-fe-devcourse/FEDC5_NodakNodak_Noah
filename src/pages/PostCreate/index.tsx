import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import PostForm from '@/pages/PostUpdate/component/PostForm';
import { FormPageContainer } from '@/pages/PostCreate/style';
import UserInfo from '@/pages/PostUpdate/component/UserInfo';
import { getMyInfo } from '@/slices/user/thunk';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
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
