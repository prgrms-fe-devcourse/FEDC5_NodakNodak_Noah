import { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

import PostComment from '@/components/Post/Detail/Comment';
import PostContent from '@/components/Post/Detail/Content';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user';
import { getPostDetail } from '@/slices/postDetail';
import LikeButton from '@/components/Post/Detail/LikeButton';

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myInfo = useSelectedMyInfo();
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <PostContent />
      <Outlet />
      <LikeButton postId={postId} userId={myInfo?._id} />
      <PostComment />
    </div>
  );
};

export default DetailPage;
