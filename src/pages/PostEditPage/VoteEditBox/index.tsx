import {
  ContentWrapper,
  Content,
  InputContainer,
  DeleteButton,
} from './VoteEditBoxStyled';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';

interface FormProps {
  formData: {
    voteTitle: string;
    voteArray: string[];
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      voteTitle: string;
      voteArray: string[];
    }>
  >;
}

const VotedBox = ({ formData, setFormData }: FormProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      voteTitle: e.target.value,
    }));
  };

  const handleCandidateChange = (index: number, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      voteArray: prevData.voteArray.map((candidate, i) =>
        i === index ? value : candidate,
      ),
    }));
  };

  const handleAddCandidate = () => {
    setFormData((prevData) => ({
      ...prevData,
      voteArray: [...prevData.voteArray, ''],
    }));
  };

  const handleRemoveCandidate = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      voteArray: prevData.voteArray.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <Card width='666px' height='auto' shadowType='medium' margin='0 auto'>
        <ContentWrapper>
          <Content>
            <Input
              required={true}
              placeholder='투표주제를 입력하세요'
              width='100%'
              height='48px'
              $flex={true}
              value={formData.voteTitle}
              onChange={handleTitleChange}
            />
            <Button
              styleType='ghost'
              size='regular'
              event='disabled'
              onClick={handleAddCandidate}
              type='button'>
              <>선택지 추가 +</>
            </Button>
            {formData.voteArray.map((candidate, index) => (
              <InputContainer key={index}>
                <Input
                  required={true}
                  placeholder={`투표 후보${index + 1}`}
                  width='100%'
                  height='48px'
                  $flex={true}
                  value={candidate}
                  onChange={(e) => handleCandidateChange(index, e.target.value)}
                />
                <DeleteButton
                  $isshow={index >= 2}
                  type='button'
                  onClick={() => handleRemoveCandidate(index)}>
                  삭제
                </DeleteButton>
              </InputContainer>
            ))}
          </Content>
        </ContentWrapper>
      </Card>
    </>
  );
};

export default VotedBox;
