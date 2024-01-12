import { ChangeEvent, useRef, useState } from 'react';

import Button from '@/components/common/Button';
import { InvisibleInput } from '@/components/common/Button/style';
import { ImageUnloadButtonProps } from '@/components/common/Button/types';
import axiosInstance from '@/utils/customAxios';

const ImageUploader = ({
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  isArrow,
  children,
  setImage,
  setFile,
  apiParam,
}: ImageUnloadButtonProps) => {
  const [loading, setLoading] = useState(false);
  const selectedFile = useRef<HTMLInputElement>(null);
  const onUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const imageFile = e.target.files![0];

    try {
      if (apiParam) {
        const formData = new FormData();
        formData.append('isCover', 'false');
        formData.append('image', imageFile);
        const {
          data: { image },
        } = await axiosInstance.post(`/${apiParam}`, formData);
        setImage(image);
        setLoading(false);
      } else {
        setImage(URL.createObjectURL(imageFile));
        setLoading(false);
        setFile && setFile(imageFile);
      }
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
