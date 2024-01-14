import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import VoteBox from '@/components/Post/Edit/VoteBox';
import { isValidatedForm } from '@/utils/Validations/formValidation';
import { MESSAGE } from '@/utils/constants';
import { sendPostRequest } from '@/components/Post/Edit/Api';
import FormContent from '@/components/Post/Edit/FormContent';
import { FormType } from '@/components/Post/Edit/PostForm/type';
import { Button } from '@/components/common';
import { ButtonWrapper } from '@/components/Post/Edit/PostForm/style';

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
        isEditable={true}
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
