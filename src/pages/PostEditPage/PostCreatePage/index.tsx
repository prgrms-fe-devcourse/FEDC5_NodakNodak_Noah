import {
  FormContainer,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
  ButtonWrapper,
} from '../styledPostEdit';
import DropdownMenu from '../DropdownMenu';
import VotedBox from '../VoteEditBox';
import { useFormik } from 'formik';
import axios from 'axios';
import Button from '@/components/Button';
import Input from '@/components/Input';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
}

const PostCreatePage = () => {
  const handleFormSubmit = async (values: FormType) => {
    if (!values.channelId || !values.content) {
      alert(!values.channelId ? '채널을 선택하세요.' : '내용을 입력하세요.');
      return;
    }
    const { title, content, voteTitle, voteArray, channelId } = values;

    try {
      const postData = {
        title: JSON.stringify({ title, content, voteTitle, voteArray }),
        channelId,
        image: '',
      };

      const response = axios({
        url: 'https://kdt.frontend.5th.programmers.co.kr:5003/posts/create',
        method: 'POST',
        data: postData,
        headers: {
          Authorization: '',
        },
      });

      alert('게시물이 생성되었습니다.');
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
          등록하기
        </Button>
      </ButtonWrapper>
    </FormContainer>
  );
};

export default PostCreatePage;
