import { useSelectedPost } from '../useSelectedPost';
import styled from 'styled-components';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Text from '@/components/Text';
import ScrollBar from '@/components/ScrollBar';

const VoteTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostVote = () => {
  const postDetailContent = useSelectedPost();

  if (!postDetailContent.title) return null;
  const { voteArray, voteTitle } = JSON.parse(postDetailContent.title);

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
            0명 투표
          </Text>
        </VoteTitleWrapper>
        <InputWrapper>
          {voteArray.map((vote: string, index: number) => (
            <Input
              key={index}
              placeholder={vote}
              bordertype='enabled'
              readOnly={true}
              style={{ marginBottom: '1.5rem', width: '466px', height: '48px' }}
            />
          ))}
        </InputWrapper>
        <ButtonWrapper>
          <Button event='enabled' styleType='primary' size='wide'>
            투표 하기
          </Button>
          <Button event='enabled' styleType='ghost' size='wide'>
            결과 보기
          </Button>
        </ButtonWrapper>
      </ScrollBar>
    </Card>
  );
};

export default PostVote;
