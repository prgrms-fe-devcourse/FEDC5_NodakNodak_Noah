import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import PostComment from '@/components/Post/Detail/Comment';
import PostContent from '@/components/Post/Detail/Content';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user/thunk';
import { getPostDetail } from '@/slices/postDetail/thunk';
import LikeButton from '@/components/Post/Detail/LikeButton';
import { DetailPageContainer } from '@/pages/PostDetail/style';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostDetail({ postId }));
    dispatch(getMyInfo());
  }, [dispatch, postId]);

  return (
    <DetailPageContainer>
      <PostContent />
      <Outlet />
      <LikeButton />
      <PostComment />
    </DetailPageContainer>
  );
};

export default DetailPage;
