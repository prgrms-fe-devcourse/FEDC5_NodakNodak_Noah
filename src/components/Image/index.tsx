import { useRef, useState } from 'react';
import { ImageProps } from '@/types/ImageProps';

const Image = ({ defaultSrc, src, width, height, alt, style }: ImageProps) => {
  const [error, setError] = useState(false);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const imageStyle = {
    display: 'block',
    width,
    height,
    ...style,
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      ref={imgRef}
      src={!error ? src : defaultSrc}
      alt={alt}
      style={{ ...imageStyle, objectFit: 'cover' }}
      onError={handleImageError}
    />
  );
};

export default Image;
