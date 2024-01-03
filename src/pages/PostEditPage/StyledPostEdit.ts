import styled from 'styled-components';
import them from '@/styles/theme';

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 954px;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  position: relative;
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 10px 0;

  & > :nth-child(2) {
    margin-bottom: 50px;
  }

  & > * {
    margin-bottom: 15px;
  }
`;

export const TextAreaWrapper = styled.div`
  height: 429px;
  background-color: ${them.colors.grayscale[100]};
  padding: 10px;
  border: 1px solid ${them.colors.grayscale[300]};
`;

export const StyledTextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: transparent;
`;

export const ButtonWrapper = styled.div`
  position: sticky;
  display: flex;
  justify-content: flex-end;
  bottom: 0;
  padding-bottom: 10px;
  margin: 20px 0;
`;
