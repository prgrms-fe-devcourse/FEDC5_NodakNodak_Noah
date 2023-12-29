import styled from 'styled-components';
import theme from '@/styles/theme';

export interface WrapperProps {
  $flex?: boolean;
}

export interface StyledInputProps {
  width?: string | number;
  height?: string | number;
  fontSize?: string;
  borderType:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'filled'
    | 'error'
    | 'disabled';
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ $flex }) => ($flex ? 'flex' : 'inline-flex')};
  justify-content: center;
  width: 100%;
`;

export const Eye = styled.span``;

export const StyledInput = styled.input<StyledInputProps>`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 'auto')};
  padding: 4px 8px;
  border: 1px solid ${({ bordertype }) => borderMap[bordertype]};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f9f9f9;
`;

const borderMap = {
  enabled: theme.colors.grayscale[300],
  hover: theme.colors.info[300],
  focus: theme.colors.info[300],
  active: theme.colors.info[300],
  filled: theme.colors.grayscale[300],
  error: theme.colors.error[500],
  disabled: theme.colors.grayscale[200],
};
