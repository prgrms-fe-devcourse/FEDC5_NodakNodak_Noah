import styled from 'styled-components';
import them from '@/styles/theme';

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 24px 0 4px 0;
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;
`;
export const TextAreaWrapper = styled.div`
  height: 429px;
  background-color: transparent;
  padding: 10px;
  border: 1px solid ${them.colors.grayscale[300]};
  border-radius: 4px;
`;
export const StyledTextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: transparent;
  font-family: Pretendeard;
`;
