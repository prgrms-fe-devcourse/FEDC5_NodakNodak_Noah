import { AvatarWrapper } from './AvatarStyled';
import { useState, useEffect } from 'react';
import { AvatarProps } from '@/types/AvatarProps';
import ImageComponent from '@/components/Image/Indexw';

const Avatar = ({
  src,
  size = 'middle',
  shape = 'circle',
  defaultSrc,
  alt,
  mode = 'cover',
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  const AvatarSizes = {
    small: 40,
    middle: 48,
    large: 224,
  };

  const avatarSize = AvatarSizes[size];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AvatarWrapper
        {...props}
        shape={shape}
        style={{
          width: `${avatarSize}px`,
          height: `${avatarSize}px`,
        }}>
        <ImageComponent
          block
          width={avatarSize}
          height={avatarSize}
          src={src}
          defaultSrc={defaultSrc}
          alt={alt}
          mode={mode}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </AvatarWrapper>
    </>
  );
};

export default Avatar;
