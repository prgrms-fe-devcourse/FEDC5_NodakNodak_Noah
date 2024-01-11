import { ImageProps } from '@/components/common/Image/type';

const Image = ({
  src,
  width,
  height,
  alt,
  objectFit = 'cover',
  ...props
}: ImageProps) => {
  const imageStyle = {
    display: 'block',
    width,
    height,
    objectFit,
    ...props.style,
  };

  return <img src={src} alt={alt} style={{ ...imageStyle }} />;
};

export default Image;
