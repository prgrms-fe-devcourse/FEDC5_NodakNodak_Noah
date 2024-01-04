import { ImageProps } from './ImageProps';
import { useRef, useState, useEffect } from 'react';

const Image = ({
  defaultSrc = '/public/DefaultImage.jpg',
  src,
  width,
  height,
  alt,
  ...props
}: ImageProps) => {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const imageStyle = {
    display: 'block',
    width,
    height,
    ...props.style,
  };
  useEffect(() => {
    if (!src) {
      setError(true);
    }
  }, []);
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
