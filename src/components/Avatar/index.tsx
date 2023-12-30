import { AvatarWrapper } from './AvatarStyled';
import Image from '../Image';
import { useState, useEffect } from 'react';
import { AvatarProps } from '@/types/AvatarProps';

const avatarSizes = {
  mini: '24px',
  small: '40px',
  middle: '48px',
  large: '224px',
};

const Avatar = ({ src, size = 'middle', defaultSrc, alt }: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);
  const avatarSize = avatarSizes[size];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AvatarWrapper
        style={{
          width: avatarSize,
          height: avatarSize,
        }}>
        <Image
          width={avatarSize}
          height={avatarSize}
          src={src}
          defaultSrc={defaultSrc}
          alt={alt}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </AvatarWrapper>
    </>
  );
};

export default Avatar;
