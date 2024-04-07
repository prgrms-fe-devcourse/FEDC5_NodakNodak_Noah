import { useEffect, useState } from 'react';
import { AvatarBox } from './style';

export interface AvatarProps {
  src?: string;
  size?: 'mini' | 'small' | 'middle' | 'large';
  alt: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const avatarSizes = {
  mini: '24px',
  small: '40px',
  middle: '48px',
  large: '224px',
};

const Avatar = ({
  src = '/DefaultProfile.webp',
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
      <AvatarBox
        onClick={onClick}
        style={{
          width: avatarSize,
          height: avatarSize,
        }}>
        <img
          width={avatarSize}
          height={avatarSize}
          src={src}
          alt={alt}
          style={{ ...props.style, opacity: loaded ? 1 : 0 }}
        />
      </AvatarBox>
    </>
  );
};

export default Avatar;
