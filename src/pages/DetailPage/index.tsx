import PostContent from './PostContent';
import PostComment from './PostComment';
import { useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch, RootState } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import { getMyInfo } from '@/slices/user';
import LikeButton from '@/components/LikeButton';

const DetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myInfo = useSelector((state: RootState) => state.userInfo.authUser);
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostDetail({ postId }));
  }, [dispatch, postId]);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      navigate('/sign');
    } else {
      dispatch(getMyInfo({ token }));
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
