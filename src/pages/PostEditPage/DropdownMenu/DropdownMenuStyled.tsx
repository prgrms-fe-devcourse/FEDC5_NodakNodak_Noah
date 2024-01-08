import styled from 'styled-components';
import theme from '@/styles/theme';

export const MenuForm = styled.div`
  width: 211px;
  height: 48px;
  max-width: 100%;
  position: relative;
  margin-top: 48px;
  margin-bottom: 16px;
`;

export const DropdownButton = styled.button<{ $ismenuopen: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.grayscale[300]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 13px 0 20px;
  background-color: ${({ $ismenuopen }) =>
    $ismenuopen ? theme.colors.grayscale[200] : theme.colors.grayscale[100]};
  color: ${theme.colors.grayscale[300]};
  cursor: pointer;
  border-radius: 4px;
`;

export const BorderLine = styled.div`
  height: 100%;
  position: absolute;
  right: 48px;
  top: 0;
  bottom: 0;
  border-left: 1px solid ${theme.colors.grayscale[300]};
`;

export const ListItemButton = styled.button`
  width: 100%;
  height: 48px;
  text-align: left;
  background-color: ${theme.colors.primary[100]};
  border: none;
  border-bottom: 1px solid ${theme.colors.primary[200]};
  padding: 0 20px;
  color: ${theme.colors.primary[400]};
  cursor: pointer;
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: none;
  }

  &:hover {
    background-color: ${theme.colors.primary[200]};
  }
`;

export const DropdownContent = styled.ul`
  width: 100%;
  position: absolute;
  top: 100%;
  margin: 0px;
  padding-inline-start: 0px;
`;
