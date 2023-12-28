import styled from 'styled-components';

export const ContentWrapper = styled.div`
  padding: 40px 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button<{ $isshow: boolean }>`
  margin-left: 10px;
  cursor: pointer;
  color: red;
  border: none;
  background: none;
  font-size: 14px;
  visibility: ${({ $isshow }) => ($isshow ? 'visible' : 'hidden')};
`;
