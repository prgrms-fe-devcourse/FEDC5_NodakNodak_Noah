import styled from 'styled-components';

export interface WrapperProps {
  flex?: boolean;
}

export interface StyledInputProps {
  width?: string | number;
  height?: string | number;
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
  display: ${({ flex }) => (flex ? 'flex' : 'inline-flex')};
  justify-content: center;
  width: 100%;
`;

export const Eye = styled.span``;

export const StyledInput = styled.input<StyledInputProps>`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  padding: 4px 8px;
  border: 1px solid ${({ borderType }) => borderMap[borderType]};
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #f9f9f9;
`;

const borderMap = {
  enabled: '#868E96',
  hover: '#5C7CFA',
  focus: '#5C7CFA',
  active: '#5C7CFA',
  filled: '#868E96',
  error: '#C92A2A',
  disabled: '#DEE2E6',
};
