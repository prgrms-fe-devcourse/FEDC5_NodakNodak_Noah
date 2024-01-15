import { useState, useEffect } from 'react';

import { AvatarProps } from '@/components/common/Avatar/type';
import { AvatarWrapper } from '@/components/common/Avatar/style';

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
        <img
          width={avatarSize}
          height={avatarSize}
          src={src ? src : '/DefaultProfile.webp'}
          alt={alt}
          style={{ ...props.style, opacity: loaded ? 1 : 0 }}
        />
      </AvatarWrapper>
    </>
  );
};

export default Avatar;
