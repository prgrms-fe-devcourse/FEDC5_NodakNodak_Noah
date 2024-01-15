import styled from 'styled-components';

import theme from '@/styles/theme';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[400]
    : theme.colors.white};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Warning = styled.div`
  display: flex;
  color: ${theme.colors.error[500]};
  font-size: 13px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
