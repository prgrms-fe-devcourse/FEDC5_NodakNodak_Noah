import Card from '../Card';
import Text from '../Text';
import Button from '../Button';
import Input from '../Input';
import styled from 'styled-components';

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

const PostVote = () => {
  return (
    <Card width='44.375rem' height='31.25rem' shadowType='large'>
      <VoteTitleWrapper>
        <Text tagType='span' fontType='h3' colorType='black'>
          투표 주제 표시 할 위치
        </Text>
        <Text tagType='span' fontType='body2' colorType='black'>
          총 20 투표
        </Text>
      </VoteTitleWrapper>
      <Input
        placeholder='투표 후보 1'
        bordertype='enabled'
        width='466px'
        height='48px'
      />
      <Input
        placeholder='투표 후보 2'
        bordertype='enabled'
        width='466px'
        height='48px'
      />
      <Input
        placeholder='투표 후보 3'
        bordertype='enabled'
        width='466px'
        height='48px'
      />
      <Input
        placeholder='투표 후보 4'
        bordertype='enabled'
        width='466px'
        height='48px'
      />
      <ButtonWrapper>
        <Button event='enabled' styleType='primary' size='wide'>
          투표 하기
        </Button>
        <Button event='enabled' styleType='ghost' size='wide'>
          결과 보기
        </Button>
      </ButtonWrapper>
    </Card>
  );
};

export default PostVote;
