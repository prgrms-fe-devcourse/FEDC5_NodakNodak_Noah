import PostComment from './PostComment';
import PostVote from './PostVote';
import PostContent from './PostContent';

const DetailPage = () => {
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
