import { useNavigate, useParams } from 'react-router-dom';

import {
  VoteTitleWrapper,
  ButtonWrapper,
} from '@/pages/PostDetail/components/Vote/style';
import BarChart from '@/pages/PostDetail/components/Result/BarChart';
import { Card, ScrollBar, Text, Button } from '@/components';
import { useSelectedVote } from '@/hooks/useSelectedVote';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';

const PostVoteChart = () => {
  const postDetailContent = useSelectedPostDetail();
  const postDetailVote = useSelectedVote();
  const { postId, channelId } = useParams();
  const navigate = useNavigate();

  if (!postDetailContent.title) return null;
  const { voteArray, voteTitle } = JSON.parse(postDetailContent.title);

  const votedArray = postDetailVote.map((vote) => {
    return JSON.parse(vote.comment)?.content;
  });

  const handleToHome = () => {
    navigate('/home');
  };

  const handleToDetail = () => {
    navigate(`/detail/${channelId}/${postId}`);
  };

  return (
    <Card width='44.375rem' height='31.25rem' shadowType='large'>
      <ScrollBar>
        <VoteTitleWrapper>
          <Text
            tagType='span'
            fontType='h3'
            colorType='black'
            style={{ margin: '1rem 0' }}>
            {voteTitle}
          </Text>
          <Text tagType='span' fontType='body2' colorType='black'>
            {`${postDetailVote?.length}명 투표`}
          </Text>
        </VoteTitleWrapper>
        <BarChart voteArray={voteArray} votedArray={votedArray} />
        <ButtonWrapper>
          <Button
            event='enabled'
            styleType='ghost'
            size='wide'
            onClick={handleToDetail}>
            투표 하기
          </Button>
          <Button
            event='enabled'
            styleType='ghost'
            size='wide'
            onClick={handleToHome}>
            홈 으로
          </Button>
        </ButtonWrapper>
      </ScrollBar>
    </Card>
  );
};

export default PostVoteChart;
