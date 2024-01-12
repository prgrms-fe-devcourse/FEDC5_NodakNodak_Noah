import styled, { keyframes } from 'styled-components';
import theme from '@/styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 16px solid ${theme.colors.grayscale[200]};
  border-top: 16px solid ${theme.colors.primary[300]};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  width: 904px;
  height: 600px;
  justify-content: center;
  align-items: center;
`;
