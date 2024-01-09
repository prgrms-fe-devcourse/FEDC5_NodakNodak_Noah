import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  FormContainer,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
  ButtonWrapper,
} from '@/components/Post/Edit/StyledPostEdit';
import VotedBox from '@/components/Post/Edit/VoteEditBox';
import { isValidatedForm } from '@/components/Post/Edit/formValidation';
import { MESSAGE, PLACEHOLDER, FORM_SIZE } from '@/utils/constants';
import { sendPostRequest } from '@/components/Post/Edit/Api';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import DropdownMenu from '@/components/Common/Dropdown';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
}

const PostCreatePage = () => {
  const { channelId } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = async (forms: FormType) => {
    const { title, content, voteTitle, voteArray, channelId } = forms;

    if (!isValidatedForm(forms)) {
      return;
    }

    const postData = {
      title: JSON.stringify({ title, content, voteTitle, voteArray }),
      channelId,
      image: '',
    };

    try {
      const token = localStorage.getItem('auth-token');
      const response = await sendPostRequest(
        '/posts/create',
        'POST',
        postData,
        token,
      );

      if (response) {
        alert(MESSAGE.CREATE_POST);
        navigate(`/home`);
      } else {
        alert(MESSAGE.CREATE_POST_FAIL);
      }
    } catch (error) {
      alert(MESSAGE.CREATE_POST_FAIL);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      voteTitle: '',
      voteArray: ['', ''],
      channelId: channelId || '',
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
          style={{
            width: FORM_SIZE.WIDTH,
            height: FORM_SIZE.HEIGHT,
            textAlign: 'center',
          }}
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
