import {
  ContentWrapper,
  Content,
  InputContainer,
  DeleteButton,
} from './VoteEditBoxStyled';
import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';

const VotedBox = () => {
  const [formData, setFormData] = useState({
    voteTitle: '',
    voteArray: ['', ''],
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      voteTitle: e.target.value,
    }));
  };

  const handleCandidateChange = (index: number, value: string) => {
    setFormData((prevData) => {
      const newVoteArray = [...prevData.voteArray];
      newVoteArray[index] = value;
      return {
        ...prevData,
        voteArray: newVoteArray,
      };
    });
  };

  const handleAddCandidate = () => {
    setFormData((prevData) => ({
      ...prevData,
      voteArray: [...prevData.voteArray, ''],
    }));
  };

  const handleRemoveCandidate = (index: number) => {
    setFormData((prevData) => {
      const newVoteArray = [...prevData.voteArray];
      newVoteArray.splice(index, 1);
      return {
        ...prevData,
        voteArray: newVoteArray,
      };
    });
  };

  return (
    <>
      <Card width='666px' height='auto' shadowType='medium'>
        <ContentWrapper>
          <Content>
            <Input
              bordertype='enabled'
              required={true}
              placeholder='투표주제를 입력하세요'
              width='466px'
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
            <div>
              {formData.voteArray.map((candidate, index) => (
                <InputContainer key={index}>
                  <Input
                    bordertype='enabled'
                    required={true}
                    placeholder={`투표 후보${index + 1}`}
                    width='466px'
                    height='48px'
                    $flex={true}
                    value={candidate}
                    onChange={(e) =>
                      handleCandidateChange(index, e.target.value)
                    }
                  />
                  <DeleteButton
                    $isshow={index >= 2}
                    onClick={() => handleRemoveCandidate(index)}>
                    삭제
                  </DeleteButton>
                </InputContainer>
              ))}
            </div>
          </Content>
        </ContentWrapper>
      </Card>
    </>
  );
};

export default VotedBox;
