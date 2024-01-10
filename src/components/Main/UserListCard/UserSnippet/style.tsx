import styled from 'styled-components';
import theme from '@/styles/theme';

export const Title = styled.h2`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;

  width: 100%;
  padding: 16px 0;

  background-color: ${theme.colors.white};
`;
