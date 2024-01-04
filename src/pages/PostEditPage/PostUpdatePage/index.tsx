import DropdownMenu from '../DropdownMenu';
import VotedBox from '../VoteEditBox';
import {
  FormContainer,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
  ButtonWrapper,
} from '../styledPostEdit';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import { useSelectedPostTitle } from '@/pages/PostEditPage/useSelectedPost';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
}

const PostUpdatePage = () => {
  const { channelId, postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetail({ postId }));
  }, [dispatch]);

  const serverData = useSelectedPostTitle();

  const handleFormSubmit = (values: FormType) => {
    if (!values.channelId || !values.content) {
      alert(!values.channelId ? '채널을 선택하세요.' : '내용을 입력하세요.');
      return;
    }

    const { title, content, voteTitle, voteArray, channelId } = values;

    try {
      const postData = {
        title: JSON.stringify({ title, content, voteTitle, voteArray }),
        channelId,
        postId,
        image: '',
      };

      const response = axios({
        url: 'https://kdt.frontend.5th.programmers.co.kr:5003/posts/update',
        method: 'PUT',
        data: postData,
        headers: {
          Authorization: '',
        },
      });

      alert('게시물이 수정되었습니다.');
    } catch (error) {
      alert(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      voteTitle: '',
      voteArray: ['', ''],
      channelId: '',
    },
    onSubmit: handleFormSubmit,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  useEffect(() => {
    if (serverData && values.channelId === '') {
      formik.setValues({ ...serverData, channelId: channelId });
    }
  }, [serverData, formik, values, channelId]);

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
          수정하기
        </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default PostUpdatePage;
