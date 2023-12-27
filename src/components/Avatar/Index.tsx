import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  AvatarProps,
  AvatarWrapperProps,
  ShapeToCssValue,
  AvatarSizes,
} from '@/types/AvatarProps';
import ImageComponent from '@/components/Image';

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

  const sizeInPx = typeof size === 'string' ? AvatarSizes[size] : size;

  return (
    <>
      <AvatarWrapper
        {...props}
        shape={shape}
        style={{ width: `${sizeInPx}px`, height: `${sizeInPx}px` }}>
        <ImageComponent
          block
          width={sizeInPx}
          height={sizeInPx}
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
