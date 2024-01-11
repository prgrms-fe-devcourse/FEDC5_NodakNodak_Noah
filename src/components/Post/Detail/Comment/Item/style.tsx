import styled from 'styled-components';
import theme from '@/styles/theme';

export const CommentItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px;
  border-bottom: 2px solid ${theme.colors.grayscale[200]};
  padding-bottom: 8px;
  width: 712px;
  height: 96px;
`;

export const CommentAuthorContainer = styled.div`
  display: inline-flex;
`;

export const CommentAuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-left: 8px;
`;
