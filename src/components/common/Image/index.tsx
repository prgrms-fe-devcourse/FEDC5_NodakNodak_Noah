import { ImageProps } from '@/components/common/Image/type';

const Image = ({ src, width, height, alt, ...props }: ImageProps) => {
  const imageStyle = {
    display: 'block',
    width,
    height,
    ...props.style,
  };

  return (
    <img src={src} alt={alt} style={{ ...imageStyle, objectFit: 'cover' }} />
  );
};

export default Image;
