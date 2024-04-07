import styled from 'styled-components';
import theme from '@/styles/theme';

export interface StyledInputProps {
  $underline?: boolean;
  $bordertype:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'filled'
    | 'error'
    | 'disabled';
  $fontType?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'button1'
    | 'button2'
    | 'button3'
    | 'caption';
}

export const InputBox = styled.div<{
  $justifyContent?: 'center' | 'flex-start';
  $width?: string;
}>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: center;
  position: relative;
  width: ${({ $width }) => $width || '100%'};
`;

export const Eye = styled.span`
  display: flex;
  position: absolute;
  right: 32%;
  @media screen and (max-width: 900px) {
    right: 24%;
  }
  @media screen and (max-width: 600px) {
    right: 6%;
  }
  cursor: pointer;
`;

export const InputElement = styled.input<StyledInputProps>`
  font-size: ${({ $fontType }) =>
    $fontType ? theme.fontSize[$fontType].size : 'auto'};
  border: 1px solid ${({ $bordertype }) => borderMap[$bordertype]};
  border-top: ${({ $underline }) => ($underline ? 'none' : 'auto')};
  border-left: ${({ $underline }) => ($underline ? 'none' : 'auto')};
  border-right: ${({ $underline }) => ($underline ? 'none' : 'auto')};
  padding: 4px 8px;
  outline: none;
  box-sizing: border-box;
  background-color: transparent;
  color: ${theme.isDark
    ? theme.colors.grayscale[100]
    : theme.colors.grayscale[400]};
  font-family: Prentendard;
`;

const borderMap = {
  enabled: theme.colors.grayscale[300],
  hover: theme.colors.grayscale[300],
  focus: theme.colors.grayscale[300],
  active: theme.colors.grayscale[300],
  filled: theme.colors.grayscale[300],
  error: theme.colors.error[500],
  disabled: theme.colors.grayscale[200],
};
