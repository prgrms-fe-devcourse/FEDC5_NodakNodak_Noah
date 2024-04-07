import styled from 'styled-components';
import theme from '@/styles/theme';

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[500]
    : theme.colors.primary[100]};
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 2vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
`;

export const TitleText = styled.span`
  font-family: 'LOTTERIACHAB', sans-serif;
  font-size: 5vw;
  color: ${theme.isDark
    ? theme.colors.primary[200]
    : theme.colors.primary[500]};
`;
