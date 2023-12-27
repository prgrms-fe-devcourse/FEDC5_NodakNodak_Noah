import styled from 'styled-components';

export const ShapeToCssValue = {
  circle: '50%',
  square: '8px',
} as const;

export interface AvatarWrapperProps {
  shape: 'circle' | 'square';
}

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
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
