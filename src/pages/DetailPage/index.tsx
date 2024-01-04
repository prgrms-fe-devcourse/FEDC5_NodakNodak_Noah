import PostContent from './PostContent';
import PostVote from './PostVote';
import PostComment from './PostComment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPostDetail({ postId }));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <PostContent />
      <PostVote />
      <PostComment />
    </div>
  );
};

export default DetailPage;
