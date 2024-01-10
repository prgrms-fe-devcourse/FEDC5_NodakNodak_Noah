import { useState, useEffect } from 'react';

import Image from '@/components/_common/Image';
import { AvatarProps } from '@/components/_common/Avatar/AvatarProps';
import { AvatarWrapper } from '@/components/_common/Avatar/style';

const avatarSizes = {
  mini: '24px',
  small: '40px',
  middle: '48px',
  large: '224px',
};

const Avatar = ({
  src,
  size = 'middle',
  alt,
  onClick,
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);
  const avatarSize = avatarSizes[size];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <AvatarWrapper
        onClick={onClick}
        style={{
          width: avatarSize,
          height: avatarSize,
        }}>
        <Image
          width={avatarSize}
          height={avatarSize}
          src={src ? src : '/DefaultProfile.jpg'}
          alt={alt}
          style={{ ...props.style, opacity: loaded ? 1 : 0 }}
        />
      </AvatarWrapper>
    </>
  );
};

export default Avatar;
