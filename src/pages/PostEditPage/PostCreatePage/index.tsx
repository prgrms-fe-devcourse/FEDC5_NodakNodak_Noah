import {
  FormContainer,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
  ButtonWrapper,
} from '../StyledPostEdit';
import VotedBox from '../VoteEditBox';
import { PLACEHOLDER, PROMPT, MESSAGE } from '../constants';
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
      { value: title, prompt: PROMPT.TITLE },
      { value: channelId, prompt: PROMPT.CHANNEL },
      { value: content, prompt: PROMPT.CONTENT },
      { value: voteTitle, prompt: PROMPT.VOTE_SUBJECT },
      {
        value: voteArray.every((candidate) => candidate),
        prompt: PROMPT.CANDIDATES_INPUT,
      },
    ];
    for (const validation of validations) {
      if (!validation.value) {
        alert(validation.prompt);
        return;
      }
    }

    if (hasDuplicates(voteArray)) {
      alert(PROMPT.DUPLICATE_CANDIDATES);
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

      alert(MESSAGE.CREATE_POST);
      navigate(`/home`);
    } catch (error) {
      alert(MESSAGE.CREATE_POST_FAIL);
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
          placeholder={PLACEHOLDER.TITLE}
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
            placeholder={PLACEHOLDER.CONTENT}
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
