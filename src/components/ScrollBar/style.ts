import styled from 'styled-components';
import theme from '@/styles/theme';

export const PaddingBox = styled.div`
  display: flex;
  padding: 16px 8px 16px 16px;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  gap: 5px;
  padding: 16px;
`;

export const ScrollBarBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 120px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.primary[100]};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary[300]};
    border-radius: 4px;
  }
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.primary[300]} ${theme.colors.primary[100]};
`;
