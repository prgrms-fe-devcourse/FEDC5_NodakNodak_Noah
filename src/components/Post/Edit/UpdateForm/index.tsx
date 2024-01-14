import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import VoteBox from '@/components/Post/Edit/VoteBox';
import { isValidatedForm } from '@/utils/Validations/formValidation';
import { MESSAGE } from '@/utils/constants';
import { sendPostRequest } from '@/components/Post/Edit/Api';
import FormContent from '@/components/Post/Edit/FormContent';
import { FormType } from '@/components/Post/Edit/UpdateForm/type';
import { useSelectedVote } from '@/hooks/useSelectedVote';
import { Button } from '@/components/common';
import { ButtonWrapper } from '@/components/Post/Edit/PostForm/style';

const UpdateForm = ({ postId }: { postId: string | undefined }) => {
  const navigate = useNavigate();
  const postDetailVote = useSelectedVote();
  const postDetail = useLocation();

  const { title, channel, image, imagePublicId } = postDetail.state;
  const channelId = channel._id;
  const serverData = JSON.parse(title);
  const isVoteEmpty = postDetailVote.length === 0;

  const fetchImageBlob = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return blob;
  };

  const generateImageFile = async () => {
    const imageBlob = await fetchImageBlob(image || '');
    const imageFile = new File([imageBlob], 'image.jpg', {
      type: 'image/jpeg',
    });

    return imageFile;
  };

  const imageFile = generateImageFile();

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
      } else {
        alert(MESSAGE.CREATE_POST_FAIL);
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
    if (serverData && values.channelId === '') {
      formik.setValues({
        ...serverData,
        imageSrc: image,
        image: imageFile,
        channelId: channelId,
      });
    }
  }, [serverData, formik, values, channelId, imageFile, image]);

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
        <Button styleType='primary' size='small' type='submit' event='enabled'>
          수정하기
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default UpdateForm;
