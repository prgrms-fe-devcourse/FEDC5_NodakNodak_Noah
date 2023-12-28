import styled from 'styled-components';
import theme from '@/styles/theme';

export const UserSnippetBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;
export const Title = styled.h2`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;

  width: 100%;
  padding: 16px 0;

  background-color: ${theme.colors.white};
`;
