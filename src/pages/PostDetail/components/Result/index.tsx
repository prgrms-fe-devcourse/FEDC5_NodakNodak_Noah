import { Link } from 'react-router-dom';
import { Comment, User } from '@/apis/responseModel';
import { Button, Card, Text } from '@/components';
import BarChart from '@/pages/PostDetail/components/Result/BarChart';
import {
  VoteContainer,
  VoteTitleWrapper,
} from '@/pages/PostDetail/components/Vote/style';

interface PostVoteChartProps {
  myInfo: User;
  postDetailVotes: Comment[];
  voteArray: string[];
  voteTitle: string;
}
const PostVoteChart = ({
  postDetailVotes,
  voteArray,
  voteTitle,
  // myInfo,
}: PostVoteChartProps) => {
  const votedArray = postDetailVotes.map((vote) => {
    return JSON.parse(vote.comment)?.content;
  });

  // const myVote = postDetailVotes.filter(
  //   (vote) => vote.author._id === myInfo._id,
  // );
  // TODO : ADD MY VOTE

  return (
    <Card width='44.375rem' height='fit-content' shadowType='large'>
      <VoteContainer>
        <VoteTitleWrapper>
          <Text
            tagType='span'
            fontType='h3'
            colorType='black'
            style={{ margin: '1rem 0' }}>
            {voteTitle}
          </Text>
          <Text tagType='span' fontType='body2' colorType='black'>
            {`${postDetailVotes?.length}명 투표`}
          </Text>
        </VoteTitleWrapper>
        <BarChart voteArray={voteArray} votedArray={votedArray} />
        <Link to='/home/all' style={{ textDecorationLine: 'none' }}>
          <Button event='enabled' styleType='ghost' size='wide'>
            홈 으로
          </Button>
        </Link>
      </VoteContainer>
    </Card>
  );
};

export default PostVoteChart;
