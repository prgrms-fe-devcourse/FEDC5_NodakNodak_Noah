import styled from 'styled-components';
import theme from '@/styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Warning = styled.div`
  display: flex;
  color: ${theme.colors.error[500]};
  margin-left: 160px;
`;

export const Guide = styled.span`
  display: flex;
  width: 80%;
  margin-left: 120px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Register = styled.span`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary[300]};
  cursor: pointer;
`;
