import styled from 'styled-components';
import theme from '@/styles/theme';
import { LightnessType } from '@/components/User/GrassTable/type';

export const GrassWrapper = styled.div`
  width: 152px;
  height: 112px;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[300]
    : theme.colors.grayscale[100]};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  border-radius: 4px;
`;

export const GrassItem = styled.div<{ lightness: LightnessType }>`
  width: 20px;
  height: 20px;
  background-color: ${({ lightness }) => theme.colors.success[lightness]};
  border-radius: 4px;

  box-shadow: 0 0 0 0.5px ${theme.colors.grayscale[200]};
`;
