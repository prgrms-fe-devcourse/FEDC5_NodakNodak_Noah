import React, { useRef } from 'react';
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
  const [error, setError] = React.useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imageStyle = {
    display: block ? 'block' : undefined,
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
