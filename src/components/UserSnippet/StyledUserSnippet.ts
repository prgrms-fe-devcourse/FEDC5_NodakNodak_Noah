import styled from 'styled-components';
import theme from '@/styles/theme';

export const UserSnippetBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  margin: 4px 0;

  cursor: pointer;
`;
export const Title = styled.h2`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;

  width: 100%;
  padding: 16px 0;

  background-color: ${theme.colors.white};
`;
