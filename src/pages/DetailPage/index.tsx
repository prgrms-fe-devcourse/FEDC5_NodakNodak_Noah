import { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

import PostComment from '@/components/Post/Detail/Comment';
import PostContent from '@/components/Post/Detail/Content';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user';
import { getPostDetail } from '@/slices/postDetail';
import LikeButton from '@/components/Post/Detail/LikeButton';
import { DetailPageContainer } from '@/pages/DetailPage/style';

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostDetail({ postId }));
  }, [dispatch, postId]);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      navigate('/sign');
    } else {
      dispatch(getMyInfo());
    }
  }, [navigate, dispatch]);
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
