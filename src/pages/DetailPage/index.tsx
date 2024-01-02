import PostContent from './PostContent';
import PostVote from './PostVote';
import PostComment from './PostComment';
import { useEffect } from 'react';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';

const DetailPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostDetail());
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
