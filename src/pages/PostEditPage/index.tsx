import DropdownMenu, { Channel } from './DropdownMenu';
import VotedBox from './VoteEditBox';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import them from '@/styles/theme';

const PostEditPage = () => {
  const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [formData, setFormData] = useState({
    voteTitle: '',
    voteArray: ['', ''],
  });

  const handleChannelChange = (nextChannel: Channel) => {
    setCurrentChannel(nextChannel);
  };

  const handleTitleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value);
  };

  const handleContentChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!currentChannel || !content) {
      if (!currentChannel) {
        alert('채널을 선택하세요.');
      }
      if (!content) {
        alert('내용을 입력하세요.');
      }
      return;
    }

    const postData = {
      title: {
        title,
        content,
        voteTitle: formData.voteTitle,
        voteArray: formData.voteArray,
      },
      channelID: currentChannel?._id,
    };
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormArea>
        <Input
          required={true}
          placeholder='제목을 입력하세요'
          width='589px'
          height='70px'
          value={title}
          onChange={handleTitleChange}
        />
        <DropdownMenu
          channelList={itemListData.map((item) => ({
            _id: item._id,
            name: item.name,
          }))}
          onClick={handleChannelChange}
        />
        <TextAreaWrapper>
          <StyledTextArea
            name='content'
            placeholder='내용을 입력하세요'
            value={content}
            onChange={handleContentChange}
          />
        </TextAreaWrapper>
      </FormArea>
      <VotedBox formData={formData} setFormData={setFormData} />
      <ButtonWrapper>
        <Button styleType='primary' size='small' type='submit' event='enabled'>
          등록하기
        </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default PostEditPage;

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 954px;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  position: relative;
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

const ButtonWrapper = styled.div`
  position: sticky;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  padding-bottom: 10px;
  margin: 20px 0;
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
