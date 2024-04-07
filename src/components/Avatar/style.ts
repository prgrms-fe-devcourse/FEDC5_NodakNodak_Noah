import styled from 'styled-components';
import theme from '@/styles/theme';

export const AvatarBox = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid ${theme.colors.grayscale[200]};
  border-radius: 50%;
  aspect-ratio: 1/1;
  overflow: hidden;
  > img {
    transition: opacity 0.2s ease-out;
  }
`;
