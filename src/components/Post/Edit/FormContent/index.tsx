import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Input, Dropdown, Button } from '@/components/common';
import ImageUploader from '@/components/common/Button/ImageUploadButton';
import { FormContentProps } from '@/components/Post/Edit/FormContent/type';
import {
  HeaderWrapper,
  UploadButtonsWrapper,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
} from '@/components/Post/Edit/FormContent/style';
import { PLACEHOLDER, FORM_SIZE } from '@/utils/constants';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user/thunk';

const FormContent = ({
  values,
  handleChange,
  setFieldValue,
  handleDeleteImage,
}: FormContentProps) => {
  const { state } = useLocation();
  const [image, setImage] = useState(state || null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInfo());
  }, [dispatch]);

  useEffect(() => {
    if (values.imageSrc !== '' && values.imageSrc) {
      setImage(values.imageSrc);
      return;
    }
    setImage(null);
  }, [values.imageSrc]);

  return (
    <FormArea>
      <HeaderWrapper>
        <Input
          required
          placeholder={PLACEHOLDER.TITLE}
          name='title'
          value={values.title}
          onChange={handleChange}
          fontType='h1'
          underline
          wrapperWidth='fit-content'
          style={{
            width: FORM_SIZE.WIDTH,
            height: FORM_SIZE.HEIGHT,
          }}
        />
        <Dropdown
          channelId={values.channelId}
          setChannelId={(value) => setFieldValue('channelId', value)}
        />
      </HeaderWrapper>

      <UploadButtonsWrapper>
        <ImageUploader
          size='regular'
          setFile={(value) => setFieldValue('image', value)}
          setImage={(value) => setFieldValue('imageSrc', value)}
          type='button'>
          이미지 선택
        </ImageUploader>
        {image && (
          <Button
            styleType='danger'
            size='regular'
            type='button'
            onClick={handleDeleteImage}>
            이미지 삭제
          </Button>
        )}
      </UploadButtonsWrapper>

      {image && (
        <img
          src={image}
          style={{ objectFit: 'contain', maxHeight: '500px', margin: '10px' }}
        />
      )}

      <TextAreaWrapper>
        <StyledTextArea
          name='content'
          placeholder={PLACEHOLDER.CONTENT}
          value={values.content}
          onChange={handleChange}
        />
        <label
          htmlFor='content'
          style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
          {`${values.content.length}/300`}
        </label>
      </TextAreaWrapper>
    </FormArea>
  );
};

export default FormContent;
