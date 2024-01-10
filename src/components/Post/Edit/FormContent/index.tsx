import React from 'react';
import { Input, Dropdown } from '@/components/common';
import {
  FormArea,
  TextAreaWrapper,
  StyledTextArea,
} from '@/pages/PostPage/style';
import { PLACEHOLDER, FORM_SIZE } from '@/utils/constants';

interface FormContentProps {
  values: {
    title: string;
    content: string;
    channelId: string;
  };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setFieldValue: (field: string, value: string) => void;
}

const FormContent = ({
  values,
  handleChange,
  setFieldValue,
}: FormContentProps) => {
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
