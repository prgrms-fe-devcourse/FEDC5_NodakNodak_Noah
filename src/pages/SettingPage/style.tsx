import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[500]
    : theme.colors.primary[100]};
`;

export const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 600px;
  padding: 2rem 2rem 4rem 4rem;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[400]
    : theme.colors.white};
  display: flex;
  gap: 2rem;
`;
