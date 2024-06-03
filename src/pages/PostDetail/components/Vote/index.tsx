import { useState } from 'react';
import { useParams } from 'react-router-dom';
import type { User } from '@/apis/responseModel';
import { Button, Card, Input, Text } from '@/components';
import {
  InputWrapper,
  VoteContainer,
  VoteTitleWrapper,
} from '@/pages/PostDetail/components/Vote/style';
import theme from '@/styles/theme';
import { useCommentAPI } from '../../hooks/useComment';

interface PostVoteProps {
  voteArray: string[];
  voteTitle: string;
  votedLength: number;
  myInfo: User;
}

const PostVote = ({ voteArray, voteTitle, votedLength }: PostVoteProps) => {
  const { postId } = useParams() as { postId: string };
  const { createComment } = useCommentAPI(postId);
  const [voteContent, setVoteContent] = useState('');

  const handleSubmitVote = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!voteContent || !token) return;
    await createComment(JSON.stringify({ type: 'vote', content: voteContent }));
  };

  const handleVoteContent = (vote: string) => {
    setVoteContent(vote);
  };

  return (
    <Card width='44.375rem' height='31.25rem' shadowType='large'>
      <VoteContainer>
        <VoteTitleWrapper>
          <Text tagType='span' fontType='h3' colorType='black'>
            {voteTitle}
          </Text>
          <Text tagType='span' fontType='body2' colorType='black'>
            {`${votedLength}명 투표`}
          </Text>
        </VoteTitleWrapper>
        <InputWrapper>
          {voteArray.map((vote: string, index: number) => (
            <Input
              key={index}
              value={vote}
              bordertype='enabled'
              readOnly
              style={{
                cursor: 'pointer',
                width: '50%',
                padding: '1rem',
                outline: 'none',
                margin: '0 auto',
                backgroundColor: `${
                  voteContent === vote ? theme.colors.primary[200] : ''
                }`,
                color: `${
                  !theme.isDark ? theme.colors.black : theme.colors.white
                }`,
              }}
              onClick={() => handleVoteContent(vote)}
            />
          ))}
        </InputWrapper>
        <Button
          event='enabled'
          styleType='primary'
          size='wide'
          onClick={handleSubmitVote}>
          투표 하기
        </Button>
      </VoteContainer>
    </Card>
  );
};

export default PostVote;
