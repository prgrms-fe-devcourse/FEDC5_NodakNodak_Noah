import styled from 'styled-components';

interface ContentWrapperProps {
  isEditable: boolean;
}
export const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  padding: 40px 20px;
  justify-content: center;
  max-height: 400px;
  cursor: ${(props) => (props.isEditable ? 'auto' : 'not-allowed')};
  pointer-events: ${(props) => (props.isEditable ? 'auto' : 'none')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 466px;
  max-width: 100%;

  & > *:first-child {
    margin-bottom: 16px;
  }

  & > *:nth-child(2) {
    margin-bottom: 28px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  display: flex;
  width: 100%;
`;

export const DeleteButton = styled.button<{ $isshow: boolean }>`
  margin-left: 10px;
  align-items: center;
  position: absolute;
  left: 100%;
  cursor: pointer;
  border: none;
  background: none;
  visibility: ${({ $isshow }) => ($isshow ? 'visible' : 'hidden')};
`;
