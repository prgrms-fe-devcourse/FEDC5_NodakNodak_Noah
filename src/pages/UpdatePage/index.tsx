import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VoteBox from '@/components/Post/Edit/VoteBox';
import { FormContainer } from '@/pages/PostPage/style';
import { isValidatedForm } from '@/utils/Validations/formValidation';
import { MESSAGE } from '@/utils/constants';
import { sendPostRequest } from '@/components/Post/Edit/Api';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import {
  useSelectedPostTitle,
  useSelectedPost,
} from '@/components/Post/Edit/useSelectedPost';
import FormContent from '@/components/Post/Edit/FormContent';
import SubmitButton from '@/components/Post/Edit/SubmitButton';

interface FormType {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
  channelId: string;

  image: File | null;
  imageSrc: string;
  imagePublicId: string;
}

const PostUpdatePage = () => {
  const { channelId, postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostDetail({ postId }));
  }, [dispatch, postId]);

  const imageSrc = useSelectedPost().image;
  const convertToBlob = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return blob;
  };

  const someFunction = async () => {
    const imageBlob = await convertToBlob(imageSrc || '');
    const imageFile = new File([imageBlob], 'image.jpg', {
      type: 'image/jpeg',
    });

    return imageFile;
  };

  const imageFile = someFunction();

  const serverData = useSelectedPostTitle();

  const handleFormSubmit = async (forms: FormType) => {
    const {
      title,
      content,
      voteTitle,
      voteArray,
      channelId,
      image,
      imagePublicId,
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
    if (imagePublicId) {
      postData.append('imagePublicId', imagePublicId || '');
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
      channelId: '',
      image: null,
      imageSrc: '',
      imagePublicId: '',
    },
    onSubmit: handleFormSubmit,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = formik;

  useEffect(() => {
    if (serverData && values.channelId === '') {
      formik.setValues({
        ...serverData,
        imageSrc: imageSrc,
        image: imageFile,
        channelId: channelId,
      });
    }
  }, [serverData, formik, values, channelId, imageFile, imageSrc]);

  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <FormContent
        values={values}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />
      <VoteBox
        values={{
          voteTitle: values.voteTitle,
          voteArray: values.voteArray,
        }}
        setFieldValue={setFieldValue}
      />
      <SubmitButton onSubmit={handleSubmit} message='수정하기' />
    </FormContainer>
  );
};

export default PostUpdatePage;
