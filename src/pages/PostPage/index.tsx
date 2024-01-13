import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import VoteBox from '@/components/Post/Edit/VoteBox';
import { isValidatedForm } from '@/utils/Validations/formValidation';
import { MESSAGE } from '@/utils/constants';
import { sendPostRequest } from '@/components/Post/Edit/Api';
import { FormContainer } from '@/pages/PostPage/style';
import SubmitButton from '@/components/Post/Edit/SubmitButton';
import FormContent from '@/components/Post/Edit/FormContent';
import { FormType } from '@/pages/PostPage/type';

const PostCreatePage = () => {
  const { channelId } = useParams();
  const navigate = useNavigate();
  const selectedChannelId =
    channelId !== 'unselected ' || null ? '' : channelId;

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
      channelId: selectedChannelId,
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
    <FormContainer onSubmit={handleSubmit} noValidate>
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
      <SubmitButton onSubmit={handleSubmit} message='등록하기' />
    </FormContainer>
  );
};

export default PostCreatePage;
