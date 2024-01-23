import styled from 'styled-components';
import theme from '@/styles/theme';

export const IndexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[500]
    : theme.colors.primary[100]};
`;

export const IndexWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const LogoContainer = styled.div`
  width: 60vw;
  max-width: 320px;
`;
