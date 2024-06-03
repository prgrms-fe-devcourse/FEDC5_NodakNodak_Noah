import styled from 'styled-components';
import theme from '@/styles/theme';

export const CommentItemContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${theme.colors.grayscale[200]};
  box-sizing: border-box;
  padding: 1.5rem;
  gap: 5rem;
  width: 100%;
  position: relative;
`;

export const CommentAuthorContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const CommentAuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  gap: 16px;

  > * {
    margin: 0;
  }
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top: solid 1px ${theme.colors.grayscale[200]};
`;

export const FormContainer = styled.form`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
