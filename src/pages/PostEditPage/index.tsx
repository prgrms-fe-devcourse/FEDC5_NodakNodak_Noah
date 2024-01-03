import DropdownMenu from './DropdownMenu';
import VotedBox from './VoteEditBox';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import them from '@/styles/theme';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import { useSelectedPostTitle } from '@/slices/useSelectedPost';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
}

const PostEditPage = ({
  mode,
  postId,
}: {
  mode: 'create' | 'edit';
  postId?: string;
}) => {
  const handleFormSubmit = (values: FormType) => {
    if (!values.channelId || !values.content) {
      if (!values.channelId) {
        alert('채널을 선택하세요.');
      }
      if (!values.content) {
        alert('내용을 입력하세요.');
      }
      return;
    }

    const postData = {
      title: {
        title: values.title,
        content: values.content,
        voteTitle: values.voteTitle,
        voteArray: values.voteArray,
      },
      channelID: values.channelId,
    };

    if (mode === 'create') {
      postData; // create 서버 동작 예정
      //console.log(postData);
    } else if (mode === 'edit' && postId) {
      const PostData = {
        ...postData,
        postId: postId,
      };
      PostData; // edit 서버 동작 예정
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetail());
  }, [dispatch]);

  const serverData = useSelectedPostTitle();
  if (!serverData) {
    return null;
  }
  console.log(serverData);

  const initialData = {
    title: '',
    content: '',
    voteTitle: '',
    voteArray: ['', ''],
    channelId: '',
  };

  const initialFormValues = mode === 'create' ? initialData : serverData;

  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: handleFormSubmit,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormArea>
        <Input
          required={true}
          placeholder='제목을 입력하세요'
          width='589px'
          height='70px'
          name='title'
          value={values.title}
          onChange={handleChange}
        />
        <DropdownMenu
          channelId={values.channelId}
          setChannelId={(value) => setFieldValue('channelId', value)}
        />
        <TextAreaWrapper>
          <StyledTextArea
            name='content'
            placeholder='내용을 입력하세요'
            value={values.content}
            onChange={handleChange}
          />
        </TextAreaWrapper>
      </FormArea>
      <VotedBox
        formData={{
          voteTitle: values.voteTitle,
          voteArray: values.voteArray,
        }}
        setFormData={(values) => {
          setFieldValue('voteTitle', values.voteTitle);
          setFieldValue('voteArray', values.voteArray);
        }}
      />
      <ButtonWrapper>
        <Button styleType='primary' size='small' type='submit' event='enabled'>
          {mode === 'edit' ? '수정하기' : '등록하기'}
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

//임시 더미데이터, 추후 데이터 형태 변경에 따라 수정 예정
// const serverData = {
//   title: '점메추',
//   content: '점심 메뉴 추천해주세요',
//   voteTitle: '점심 메뉴 투표',
//   voteArray: ['한식', '중식', '일식', '양식'],
//   postId: '123',
//   image: 0,
//   imageToDeletePublicId: 1,
//   channelId: '6587c',
// };
