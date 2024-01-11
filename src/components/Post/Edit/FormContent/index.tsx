import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Input, Dropdown, Image } from '@/components/common';
import {
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
} from '@/pages/PostPage/style';
import { PLACEHOLDER, FORM_SIZE } from '@/utils/constants';
import ImageUploader from '@/components/common/Button/ImageUploadButton';

interface FormContentProps {
  values: {
    title: string;
    content: string;
    channelId: string;
    image: File | null;
    imageSrc?: string;
  };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setFieldValue: (field: string, value: string | File | null) => void;
}

const FormContent = ({
  values,
  handleChange,
  setFieldValue,
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
      <ImageUploader
        size='wide'
        setFile={(value) => setFieldValue('image', value)}
        setImage={(value) => setFieldValue('imageSrc', value)}
        type='button'>
        이미지 선택
      </ImageUploader>
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
