import { useRef, useState } from 'react';
import { ImageProps } from '@/types/ImageProps';

const Image = ({
  defaultSrc,
  src,
  block,
  width,
  height,
  alt,
  mode,
  ...props
}: ImageProps) => {
  const [error, setError] = useState(false);

  const imgRef = useRef<HTMLImageElement | null>(null);

  const imageStyle = {
    display: block ? 'block' : 'none',
    width,
    height,
    objectFit: mode,
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      ref={imgRef}
      src={!error ? src : defaultSrc}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
      onError={handleImageError}
    />
  );
};

export default Image;
