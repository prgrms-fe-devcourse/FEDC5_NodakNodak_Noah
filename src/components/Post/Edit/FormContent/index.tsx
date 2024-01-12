import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Input,
  Dropdown,
  Image,
  Button,
  Avatar,
  Text,
} from '@/components/common';
import ImageUploader from '@/components/common/Button/ImageUploadButton';
import { FormContentProps } from '@/components/Post/Edit/FormContent/type';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import theme from '@/styles/theme';
import {
  UserInfoWrapper,
  UserInfo,
  ActionButtonsWrapper,
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
} from '@/components/Post/Edit/FormContent/style';
import { PLACEHOLDER, FORM_SIZE } from '@/utils/constants';

const FormContent = ({
  values,
  handleChange,
  setFieldValue,
  handleDeleteImage,
}: FormContentProps) => {
  const { state } = useLocation();
  const [image, setImage] = useState(state || '');
  const myInfo = useSelectedMyInfo();

  useEffect(() => {
    setImage(values.imageSrc);
  }, [values.imageSrc]);

  return (
    <FormArea>
      <UserInfoWrapper>
        <UserInfo>
          <Avatar size='middle' alt='유저네임' src={myInfo?.image} />
          <Text
            colorType='grayscale'
            colorNumber={theme.isDark ? '100' : '500'}
            fontType='body1'
            tagType='span'
            style={{ margin: '0 10px' }}>
            {myInfo?.fullName || 'user'}
          </Text>
        </UserInfo>
        <Dropdown
          channelId={values.channelId}
          setChannelId={(value) => setFieldValue('channelId', value)}
        />
      </UserInfoWrapper>

      <Input
        required={true}
        placeholder={PLACEHOLDER.TITLE}
        name='title'
        value={values.title}
        onChange={handleChange}
        fontType='h1'
        underline={true}
        wrapperWidth='fit-content'
        style={{
          width: FORM_SIZE.WIDTH,
          height: FORM_SIZE.HEIGHT,
        }}
      />

      <ActionButtonsWrapper>
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
      </ActionButtonsWrapper>

      <Image
        src={image}
        style={{ objectFit: 'contain', maxHeight: '500px', margin: '10px' }}
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
  );
};

export default FormContent;
