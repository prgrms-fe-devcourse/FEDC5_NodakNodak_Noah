import {
  ContentWrapper,
  Content,
  InputContainer,
  DeleteButton,
} from '@/components/Post/Edit/VoteBox/style';
import { PLACEHOLDER } from '@/utils/constants';
import { Card, Input, Button, ScrollBar } from '@/components/common';
import DeleteIcon from '@/assets/DeleteIcon';
import { FormProps } from '@/components/Post/Edit/VoteBox/type';
import Text from '@/components/common/Text';
import theme from '@/styles/theme';

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
              required={true}
              underline={true}
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
                  required={true}
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
                    $isshow={index >= 2}
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
                {'투표가 진행되어 수정할 수 없습니다.'}
              </Text>
            )}
          </Content>
        </ContentWrapper>
      </ScrollBar>
    </Card>
  );
};

export default VoteBox;
