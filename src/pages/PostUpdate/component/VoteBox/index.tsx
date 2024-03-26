import {
  ContentWrapper,
  Content,
  InputContainer,
  DeleteButton,
} from '@/pages/PostUpdate/component/VoteBox/style';
import { PLACEHOLDER, MESSAGE } from '@/utils/constants';
import { Card, Input, Button, ScrollBar } from '@/components';
import DeleteIcon from '@/assets/DeleteIcon';
import Text from '@/components/Text';
import theme from '@/styles/theme';

export interface FormProps {
  values: {
    voteTitle: string;
    voteArray: string[];
  };
  setFieldValue: (field: string, values: string | string[]) => void;
  isEditable: boolean;
}

const VoteBox = ({ values, setFieldValue, isEditable }: FormProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue('voteTitle', e.target.value);
  };

  const handleCandidateChange = (index: number, value: string) => {
    setFieldValue(`voteArray[${index}]`, value);
  };

  const handleAddCandidate = () => {
    setFieldValue('voteArray', [...values.voteArray, '']);
  };

  const handleRemoveCandidate = (index: number) => {
    const updatedVoteArray = values.voteArray.filter((_, i) => i !== index);
    setFieldValue('voteArray', updatedVoteArray);
  };

  return (
    <Card
      width='100%'
      height='auto'
      shadowType='medium'
      style={{ margin: '0 auto', maxWidth: '666px' }}>
      <ScrollBar>
        <ContentWrapper $isEditable={isEditable}>
          <Content>
            <Input
              placeholder={PLACEHOLDER.VOTE_SUBJECT}
              required
              underline
              fontType='h3'
              value={values.voteTitle}
              onChange={handleTitleChange}
              style={{
                width: '100%',
                height: '48px',
              }}
            />
            <Button
              styleType='ghost'
              size='regular'
              event='hover'
              onClick={handleAddCandidate}
              type='button'>
              선택지 추가
            </Button>
            {values.voteArray.map((candidate, index) => (
              <InputContainer key={index}>
                <Input
                  required
                  placeholder={`투표 후보${index + 1}`}
                  value={candidate}
                  onChange={(e) => handleCandidateChange(index, e.target.value)}
                  style={{
                    width: '100%',
                    height: '48px',
                  }}
                />
                {isEditable && (
                  <DeleteButton
                    $isShow={index >= 2}
                    type='button'
                    onClick={() => handleRemoveCandidate(index)}>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </InputContainer>
            ))}
            {!isEditable && (
              <Text
                tagType='span'
                style={{ color: `${theme.colors.error[400]}` }}>
                {MESSAGE.VOTE_IN_PROGRESS}
              </Text>
            )}
          </Content>
        </ContentWrapper>
      </ScrollBar>
    </Card>
  );
};

export default VoteBox;
