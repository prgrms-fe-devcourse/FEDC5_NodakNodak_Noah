import styled from 'styled-components';

export const MenuForm = styled.div`
  width: 211px;
  height: 48px;
  max-width: 100%;
  position: relative;
`;

export const DropdownButton = styled.button<{ $ismenuopen: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid #868e96;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${({ $ismenuopen }) =>
    $ismenuopen ? '#f5f5f5' : '#f9f9f9'};
  color: #868e96;
  font-family: Pretendard;
  cursor: pointer;
`;

export const BorderLine = styled.div`
  height: 100%;
  position: absolute;
  right: 48px;
  top: 0;
  bottom: 0;
  border-left: 1px solid #868e96;
`;

export const ListItemButton = styled.button`
  width: 100%;
  height: 48px;

  text-align: left;
  background-color: #faf6e8;
  border: none;
  border-bottom: 1px solid #e3d4b3;
  padding: 0 20px;
  color: #8d714d;
  cursor: pointer;
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: none;
  }

  &:hover {
    background-color: #e6dcc6;
  }
`;

export const DropdownContent = styled.ul`
  top: 100;
  position: absolute;
  flex-direction: column;
`;
