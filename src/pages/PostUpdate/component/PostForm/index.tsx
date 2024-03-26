import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import VoteBox from '@/pages/PostUpdate/component/VoteBox';
import { isValidatedForm } from '@/utils/Validations/formValidation';
import { MESSAGE } from '@/utils/constants';
import { sendPostRequest } from '@/pages/PostUpdate/component/Api';
import FormContent from '@/pages/PostUpdate/component/FormContent';
import { Button } from '@/components';
import { ButtonWrapper } from '@/pages/PostUpdate/component/PostForm/style';

export interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;
  image: File | null;
}

const PostForm = ({ channelId }: { channelId: string | undefined }) => {
  const navigate = useNavigate();
  const handleFormSubmit = async (forms: FormType) => {
    const { title, content, voteTitle, voteArray, channelId, image } = forms;

    if (!isValidatedForm(forms)) {
      return;
    }

    const postData = new FormData();
    postData.append(
      'title',
      JSON.stringify({ title, content, voteTitle, voteArray }),
    );
    postData.append('channelId', channelId);
    postData.append('image', image || '');

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
      image: null,
    },
    onSubmit: handleFormSubmit,
  });

  const handleDeleteImage = () => {
    setFieldValue('imageSrc', undefined);
    setFieldValue('image', null);
  };

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormContent
        values={values}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        handleDeleteImage={handleDeleteImage}
      />
      <VoteBox
        values={{
          voteTitle: values.voteTitle,
          voteArray: values.voteArray,
        }}
        setFieldValue={setFieldValue}
        isEditable
      />
      <ButtonWrapper>
        <Button styleType='primary' size='small' type='submit' event='enabled'>
          등록하기
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default PostForm;
