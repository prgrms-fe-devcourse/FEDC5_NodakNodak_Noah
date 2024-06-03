import { useParams } from 'react-router-dom';
import { useGetMyInfo } from '@/apis/myInfo';
import { useGetPostAPI } from '@/apis/posts';
import PostComment from '@/pages/PostDetail/components/CommentList';
import PostContent from '@/pages/PostDetail/components/Content';
import LikeButton from '@/pages/PostDetail/components/LikeButton';
import { DetailPageContainer } from '@/pages/PostDetail/style';
import PostVoteChart from './components/Result';
import PostVote from './components/Vote';

const DetailPage = () => {
  const { postId } = useParams() as { postId: string };

  const myInfo = useGetMyInfo();
  const postDetail = useGetPostAPI(postId);
  const {
    title,
    author,
    image,
    createdAt,
    content,
    likes,
    voteArray,
    voteTitle,
    postDetailComments,
    postDetailVotes,
  } = postDetail;
  const { fullName, _id: authorID } = author;

  const isVoted = postDetailVotes.some(
    (vote) => vote.author._id === myInfo._id,
  );

  return (
    <DetailPageContainer>
      <PostContent
        postContent={{
          title,
          fullName,
          authorID,
          image,
          createdAt,
          content,
        }}
        myInfo={myInfo}
      />
      {!isVoted ? (
        <PostVote
          voteArray={voteArray}
          voteTitle={voteTitle}
          myInfo={myInfo}
          votedLength={postDetailVotes.length}
        />
      ) : (
        <PostVoteChart
          voteArray={voteArray}
          voteTitle={voteTitle}
          myInfo={myInfo}
          postDetailVotes={postDetailVotes}
        />
      )}
      <LikeButton likes={likes} myInfo={myInfo} />
      <PostComment postDetailComments={postDetailComments} />
    </DetailPageContainer>
  );
};

export default DetailPage;
