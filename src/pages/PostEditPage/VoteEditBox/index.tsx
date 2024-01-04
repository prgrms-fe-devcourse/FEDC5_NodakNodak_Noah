import {
  ContentWrapper,
  Content,
  InputContainer,
  DeleteButton,
} from './VoteEditBoxStyled';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';
import ScrollBar from '@/components/ScrollBar';
import DeleteIcon from '@/assets/DeleteIcon';

interface FormProps {
  formData: {
    voteTitle: string;
    voteArray: string[];
  };
  setFormData: (values: { voteTitle: string; voteArray: string[] }) => void;
}

const VotedBox = ({ formData, setFormData }: FormProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      voteTitle: e.target.value,
    });
  };

  const handleCandidateChange = (index: number, value: string) => {
    setFormData({
      ...formData,
      voteArray: formData.voteArray.map((candidate, i) =>
        i === index ? value : candidate,
      ),
    });
  };

  const handleAddCandidate = () => {
    setFormData({
      ...formData,
      voteArray: [...formData.voteArray, ''],
    });
  };

  const handleRemoveCandidate = (index: number) => {
    setFormData({
      ...formData,
      voteArray: formData.voteArray.filter((_, i) => i !== index),
    });
  };

  return (
    <Card
      width='100%'
      height='auto'
      shadowType='medium'
      style={{ margin: '0 auto', maxWidth: '666px' }}>
      <ScrollBar>
        <ContentWrapper>
          <Content>
            <Input
              placeholder='투표주제를 입력하세요'
              required={true}
              underline={true}
              fontType='h3'
              value={formData.voteTitle}
              onChange={handleTitleChange}
              style={{
                width: '100%',
                height: '48px',
                textAlign: 'center',
              }}
            />
            <Button
              styleType='ghost'
              size='regular'
              event='hover'
              onClick={handleAddCandidate}
              type='button'>
              <>선택지 추가 +</>
            </Button>
            {formData.voteArray.map((candidate, index) => (
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
                <DeleteButton
                  $isshow={index >= 2}
                  type='button'
                  onClick={() => handleRemoveCandidate(index)}>
                  <DeleteIcon />
                </DeleteButton>
              </InputContainer>
            ))}
          </Content>
        </ContentWrapper>
      </ScrollBar>
    </Card>
  );
};

export default VotedBox;
