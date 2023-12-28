import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
  color: #5c7cfa;
  cursor: pointer;
`;

export interface SignProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}
