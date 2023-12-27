import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { AvatarProps } from '@/types/AvatarProps';
import ImageComponent from '@/components/Image';

const ShapeToCssValue = {
  circle: '50%',
  square: '8px',
} as const;

interface AvatarWrapperProps {
  shape: 'circle' | 'square';
}

const AvatarSizes = {
  small: 40,
  middle: 48,
  large: 224,
} as const;

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) => ShapeToCssValue[shape]};
  background-color: #eee;
  overflow: hidden;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;

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

  useEffect(() => {
    setLoaded(true);
  }, []);

  const avatarSize = AvatarSizes[size];

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
