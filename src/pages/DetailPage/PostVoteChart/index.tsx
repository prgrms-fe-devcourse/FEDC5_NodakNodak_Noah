import { useNavigate } from 'react-router-dom';

import {
  VoteTitleWrapper,
  ButtonWrapper,
} from '@/pages/DetailPage/PostVote/StyledPostVote';
import BarChart from '@/pages/DetailPage/PostVoteChart/BarChart';
import Card from '@/components/Card';
import Text from '@/components/Text';
import Button from '@/components/Button';
import ScrollBar from '@/components/ScrollBar';
import { useSelectedVote } from '@/hooks/useSelectedVote';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';

const PostVoteChart = () => {
  const postDetailContent = useSelectedPostDetail();
  const postDetailVote = useSelectedVote();
  const navigate = useNavigate();

  if (!postDetailContent.title) return null;
  const { voteArray, voteTitle } = JSON.parse(postDetailContent.title);

  const votedArray = postDetailVote.map((vote) => {
    return JSON.parse(vote.comment)?.content;
  });

  const handleToHome = () => {
    navigate('/home');
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
            onClick={handleToHome}>
            홈 으로
          </Button>
        </ButtonWrapper>
      </ScrollBar>
    </Card>
  );
};

export default PostVoteChart;
