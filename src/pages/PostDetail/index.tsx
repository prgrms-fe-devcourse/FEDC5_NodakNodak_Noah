import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import PostComment from '@/pages/PostDetail/components/CommentList';
import PostContent from '@/pages/PostDetail/components/Content';
import LikeButton from '@/pages/PostDetail/components/LikeButton';
import { DetailPageContainer } from '@/pages/PostDetail/style';
import { getPostDetail } from '@/slices/postDetail/thunk';
import { getMyInfo } from '@/slices/user/thunk';
import { useDispatch } from '@/store';

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
