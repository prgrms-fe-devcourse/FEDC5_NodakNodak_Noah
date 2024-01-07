import {
  FormContainer,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
  ButtonWrapper,
} from '../StyledPostEdit';
import VotedBox from '../VoteEditBox';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import Button from '@/components/Button';
import Input from '@/components/Input';
import DropdownMenu from '@/components/DropdownMenu';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
}

const PostCreatePage = () => {
  const BASE_URL = 'https://kdt.frontend.5th.programmers.co.kr:5003';
  const navigate = useNavigate();

  const hasDuplicates = (array: string[]) => {
    return new Set(array).size !== array.length;
  };

  const handleFormSubmit = async ({
    title,
    content,
    voteTitle,
    voteArray,
    channelId,
  }: FormType) => {
    const validations = [
      { value: title, message: '제목을 입력하세요.' },
      { value: channelId, message: '채널을 선택하세요.' },
      { value: content, message: '내용을 입력하세요.' },
      { value: voteTitle, message: '투표 주제를 입력하세요.' },
      {
        value: voteArray.every((candidate) => candidate),
        message: '투표 후보를 모두 작성하세요.',
      },
    ];
    for (const validation of validations) {
      if (!validation.value) {
        alert(validation.message);
        return;
      }
    }

    if (hasDuplicates(voteArray)) {
      alert('중복된 후보가 있습니다. 중복을 제거해주세요.');
      return;
    }

    try {
      const postData = {
        title: JSON.stringify({ title, content, voteTitle, voteArray }),
        channelId,
        image: '',
      };

      const token = localStorage.getItem('auth-token');
      await axios({
        url: `${BASE_URL}/posts/create`,
        method: 'POST',
        data: postData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('게시물이 생성되었습니다.');
      navigate(`/home`);
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
    <FormContainer onSubmit={handleSubmit} noValidate>
      <FormArea>
        <Input
          required={true}
          placeholder='제목을 입력하세요'
          name='title'
          value={values.title}
          onChange={handleChange}
          fontType='h1'
          underline={true}
          style={{ width: '584px', height: '72px', textAlign: 'center' }}
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
