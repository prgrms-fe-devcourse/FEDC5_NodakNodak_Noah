import styled from 'styled-components';
import theme from '@/styles/theme';

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

export const CommentBoundaryLine = styled.div`
  margin: 3rem 15.19rem;
  border-top: solid 1px ${theme.colors.grayscale[200]};
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  margin-top: 16px;
  width: 712px;
  align-items: center;
  justify-content: space-between;
`;
