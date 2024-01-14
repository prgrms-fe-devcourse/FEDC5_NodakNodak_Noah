import styled from 'styled-components';
import theme from '@/styles/theme';

export const RequestCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[400]
    : theme.colors.primary[100]};
  width: 960px;
  height: 680px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 1px ${theme.colors.grayscale[300]};
  @media screen and (max-width: 900px) {
    width: 680px;
  }
  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

export const MessageContent = styled.textarea`
  height: 200px;
  width: 360px;
`;
