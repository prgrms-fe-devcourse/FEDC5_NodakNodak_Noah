import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  padding: 40px 20px;
  justify-content: center;
  overflow-y: auto;
  max-height: 400px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 466px;
  max-width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
`;

export const DeleteButton = styled.button<{ $isshow: boolean }>`
  margin-left: 10px;
  position: absolute;
  left: 100%;
  cursor: pointer;
  color: red;
  border: none;
  background: none;
  font-size: 14px;
  visibility: ${({ $isshow }) => ($isshow ? 'visible' : 'hidden')};
`;
