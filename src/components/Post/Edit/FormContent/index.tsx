
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, Dropdown, Image, Button } from '@/components/common';

import {
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
} from '@/pages/PostPage/style';
import { PLACEHOLDER, FORM_SIZE } from '@/utils/constants';

import ImageUploader from '@/components/common/Button/ImageUploadButton';

import { FormContentProps } from '@/components/Post/Edit/FormContent/type';

const FormContent = ({
  values,
  handleChange,
  setFieldValue,
  handleDeleteImage,
}: FormContentProps) => {
  const { state } = useLocation();
  const [image, setImage] = useState(state || '');

  useEffect(() => {
    setImage(values.imageSrc);
  }, [values.imageSrc]);

  return (
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
      <Dropdown
        channelId={values.channelId}
        setChannelId={(value) => setFieldValue('channelId', value)}
      />
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '10px',
        }}>
        <ImageUploader
          size='regular'
          setFile={(value) => setFieldValue('image', value)}
          setImage={(value) => setFieldValue('imageSrc', value)}
          type='button'>
          이미지 선택
        </ImageUploader>
        {image && (
          <Button
            styleType='primary'
            size='regular'
            type='button'
            onClick={handleDeleteImage}>
            이미지 삭제
          </Button>
        )}
      </div>
      <Image src={image} style={{ objectFit: 'contain', maxHeight: '500px' }} />
      <TextAreaWrapper>
        <StyledTextArea
          name='content'
          placeholder={PLACEHOLDER.CONTENT}
          value={values.content}
          onChange={handleChange}
        />
      </TextAreaWrapper>
    </FormArea>
  );
};

export default FormContent;
