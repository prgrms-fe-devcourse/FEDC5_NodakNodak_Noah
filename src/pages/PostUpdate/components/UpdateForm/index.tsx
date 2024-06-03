import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostAPI } from '@/apis/posts';
import { Button } from '@/components';
import { useSelectedVote } from '@/hooks/useSelectedVote';
import { sendPostRequest } from '@/pages/PostUpdate/components/Api';
import FormContent from '@/pages/PostUpdate/components/FormContent';
import { ButtonWrapper } from '@/pages/PostUpdate/components/PostForm/style';
import VoteBox from '@/pages/PostUpdate/components/VoteBox';
import { isValidatedForm } from '@/utils/Validations/formValidation';
import { MESSAGE } from '@/utils/constants';

export interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;

  image: File | null;
  imageSrc: string;
  imageToDeletePublicId: string;
}

export interface TitleType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
}

const UpdateForm = () => {
  const navigate = useNavigate();
  const postDetailVote = useSelectedVote();
  const { postId, channelId } = useParams() as {
    postId: string;
    channelId: string;
  };
  const postDetailContent = useGetPostAPI(postId);

  const { title, content, voteTitle, voteArray, image, imagePublicId } =
    postDetailContent;

  const isVoteEmpty = postDetailVote.length === 0;

  const handleFormSubmit = async (forms: FormType) => {
    const {
      title,
      content,
      voteTitle,
      voteArray,
      channelId,
      image,
      imageToDeletePublicId,
    } = forms;

    if (!isValidatedForm(forms)) {
      return;
    }

    const postData = new FormData();

    postData.append(
      'title',
      JSON.stringify({ title, content, voteTitle, voteArray }),
    );
    postData.append('channelId', channelId);
    postData.append('postId', postId || '');
    postData.append('image', image || '');
    if (imageToDeletePublicId) {
      postData.append('imageToDeletePublicId', imagePublicId || '');
    }

    try {
      const token = localStorage.getItem('auth-token');
      const response = await sendPostRequest(
        '/posts/update',
        'PUT',
        postData,
        token,
      );

      if (response) {
        alert(MESSAGE.CREATE_POST);
        navigate(`/detail/${channelId}/${postId}`);
      }
    } catch (error) {
      alert(MESSAGE.CREATE_POST_FAIL);
    }
  };

  const handleDeleteImage = () => {
    setFieldValue('imageSrc', undefined);
    setFieldValue('image', null);
    setFieldValue('imageToDeletePublicId', imagePublicId);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      voteTitle: '',
      voteArray: ['', ''],
      channelId: '',
      image: null,
      imageSrc: '',
      imageToDeletePublicId: '',
    },
    onSubmit: handleFormSubmit,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  useEffect(() => {
    if (values.channelId === '') {
      formik.setValues({
        title,
        content,
        voteTitle,
        voteArray,
        imageSrc: image ? image : '',
        image: null,
        channelId: channelId,
        imageToDeletePublicId: '',
      });
    }
  }, [
    title,
    content,
    voteTitle,
    voteArray,
    image,
    channelId,
    formik,
    values.channelId,
  ]);

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
        isEditable={isVoteEmpty}
      />
      <ButtonWrapper>
        <Button styleType='primary' size='small' event='enabled'>
          수정하기
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default UpdateForm;
