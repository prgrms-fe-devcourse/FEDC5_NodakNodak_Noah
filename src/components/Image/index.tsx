import { useRef, useState } from 'react';
import { ImageProps } from '@/types/ImageProps';

const imageSize = {
  medium: {
    width: '17.5rem',
    height: '9.125rem',
  },
  large: {
    width: '23.25rem',
    height: '9.4375rem',
  },
};

const Image = ({ defaultSrc, src, size, alt, style }: ImageProps) => {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const imageStyle = {
    display: 'block',
    width: imageSize[size].width,
    height: imageSize[size].height,
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
