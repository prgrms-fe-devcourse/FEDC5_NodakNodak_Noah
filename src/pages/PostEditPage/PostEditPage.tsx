import DropdownMenu from './DropdownMenu';
import VotedBox from './VoteEditBox';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Channel } from '@/types/APIResponseTypes';
import them from '@/styles/theme';

const PostEditPage = () => {
  const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);

  const handleChannelClick = (nextChannel: Channel) => {
    setCurrentChannel(nextChannel);
    currentChannel;
  };

  return (
    <>
      <FormContainer>
        <Button styleType='primary' size='small' type='submit' event='enabled'>
          등록하기
        </Button>
        <FormArea>
          <Input
            required={true}
            placeholder='제목을 입력하세요'
            width='589px'
            height='70px'
          />
          <DropdownMenu
            itemList={itemListData}
            title='채널 선택'
            onClick={handleChannelClick}
          />
          <TextAreaWrapper>
            <StyledTextArea name='content' placeholder='내용을 입력하세요' />
          </TextAreaWrapper>
        </FormArea>
        <VotedBox />
      </FormContainer>
    </>
  );
};

export default PostEditPage;

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 954px;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0;

  & > :nth-child(2) {
    margin-bottom: 50px;
  }

  & > * {
    margin-bottom: 15px;
  }
`;

const TextAreaWrapper = styled.div`
  height: 429px;
  background-color: ${them.colors.grayscale[100]};
  padding: 10px;
  border: 1px solid ${them.colors.grayscale[300]};
`;

const StyledTextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: transparent;
`;

//임시 더미 데이터
const itemListData = [
  {
    authRequired: false,
    posts: [],
    _id: '6587c05d83003970282b863e',
    name: '연예',
    description: 'Test',
    createdAt: '2023-12-24T05:23:41.475Z',
    updatedAt: '2023-12-24T05:23:41.475Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '6587s',
    name: '스포츠',
    description: 'Test',
    createdAt: '2023-12-24T05:23:41.475Z',
    updatedAt: '2023-12-24T05:23:41.475Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '6587c',
    name: '잡담',
    description: 'Test',
    createdAt: '2023-12-24T05:23:41.475Z',
    updatedAt: '2023-12-24T05:23:41.475Z',
    __v: 0,
  },
];
