import axios from 'axios';
import { ChangeEvent, useRef, useState } from 'react';

import Button from '@/components/Common/Button';
import { InvisibleInput } from '@/components/Common/Button/styledButton';
import { ImageUnloadButtonProps } from '@/components/Common/Button/ButtonPropsTypes';

const ImageUploader = ({
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  isArrow,
  children,
  setImage,
  apiParam,
}: ImageUnloadButtonProps) => {
  const [loading, setLoading] = useState(false);
  const selectedFile = useRef<HTMLInputElement>(null);
  const onUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('isCover', 'false');
    formData.append('image', e.target.files![0]);
    try {
      const axiosOptions = {
        url: `https://kdt.frontend.5th.programmers.co.kr:5003/${apiParam}`,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
        },
        data: formData,
      };
      const {
        data: { image },
      } = await axios(axiosOptions);
      setImage(image);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Error while uploading image');
    }
  };

  return (
    <>
      {!loading ? (
        <Button
          styleType={styleType}
          size={size}
          event={event}
          type={type}
          isArrow={isArrow}
          onClick={() => selectedFile.current?.click()}>
          {children}
        </Button>
      ) : (
        'Uploading...'
      )}
      <InvisibleInput
        type='file'
        accept='image/*'
        ref={selectedFile}
        onChange={onUploadImage}
      />
    </>
  );
};

export default ImageUploader;
