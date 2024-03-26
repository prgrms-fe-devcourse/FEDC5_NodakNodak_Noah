import styled from 'styled-components';
import theme from '@/styles/theme';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const UploadButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 28px 0 12px 0;
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
  border: 1px solid ${theme.colors.grayscale[300]};
  border-radius: 4px;
  position: relative;
`;
export const StyledTextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  color: ${theme.isDark ? theme.colors.white : theme.colors.black};
  background-color: transparent;
  font-family: Pretendeard;
  color: ${theme.isDark ? 'white' : 'black'};
`;
