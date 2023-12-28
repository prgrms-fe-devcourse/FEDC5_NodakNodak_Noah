import DropdownMenu from './DropdownMenu';
import VotedBox from './VoteEditBox';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Channel } from '@/types/APIResponseTypes';

const PostEditPage = () => {
  const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);

  const handleChannelClick = (nextChannel: Channel) => {
    setCurrentChannel(nextChannel);
    currentChannel;
  };

  return (
    <>
      <Button styleType='primary' size='small' type='submit' event='enabled'>
        등록하기
      </Button>
      <FormArea>
        <Input
          bordertype='enabled'
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
    </>
  );
};

export default PostEditPage;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TextAreaWrapper = styled.div`
  width: 954px;
  height: 429px;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #868e96;
`;

const StyledTextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  color: #000;
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
