import { ChangeEvent, useRef, useState } from 'react';
import Button, { type ButtonProps } from '@/components/Button';
import { InvisibleInput } from '@/components/Button/style';
import axiosInstance from '@/utils/customAxios';

export interface ImageUploadButtonProps extends ButtonProps {
  setFile?: (file: File | null) => void;
  setImage: (image: string) => void;
  apiParam?: string;
}

const ImageUploader = ({
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  children,
  setImage,
  setFile,
  apiParam,
}: ImageUploadButtonProps) => {
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
        location.reload();
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
