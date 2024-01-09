import styled from 'styled-components';
import theme from '@/styles/theme';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 160px;
  background-color: ${theme.colors.grayscale[100]};
  color: ${theme.colors.black};
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
