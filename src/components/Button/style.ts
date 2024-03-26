import { styled, css } from 'styled-components';
import theme from '@/styles/theme';

export const ButtonSize = {
  mini: css`
    display: flex;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  `,
  small: css`
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
  `,
  regular: css`
    display: flex;
    width: 120px;
    justify-content: center;
    align-items: center;
  `,
  wide: css`
    display: flex;
    width: 230px;
    min-width: 200px;
    justify-content: center;
    align-items: center;
  `,
};

export const ButtonTypeEvent = {
  primary: {
    enabled: css`
      background: ${theme.isDark
        ? theme.colors.primary[400]
        : theme.colors.primary[200]};
      color: ${theme.isDark
        ? theme.colors.primary[100]
        : theme.colors.grayscale[400]};
    `,
    hover: css`
      background: ${theme.colors.primary[300]};
      color: ${theme.colors.grayscale[400]};
    `,
    click: css`
      background: ${theme.colors.primary[400]};
      color: ${theme.colors.grayscale[100]};
    `,
    focus: css`
      align-self: stretch;
      background: ${theme.colors.primary[300]};
      color: ${theme.colors.grayscale[500]};
    `,
    disabled: css`
      background: ${theme.colors.grayscale[200]};
      color: ${theme.colors.grayscale[300]};
    `,
  },
  ghost: {
    enabled: css`
      border: 1px solid
        ${theme.isDark ? theme.colors.primary[100] : theme.colors.primary[200]};
      background: ${theme.isDark
        ? theme.colors.grayscale[500]
        : theme.colors.white};
      color: ${theme.isDark
        ? theme.colors.primary[100]
        : theme.colors.primary[400]};
    `,
    hover: css`
      border: 1px solid ${theme.colors.primary[300]};
      background: ${theme.colors.primary[100]};
      color: ${theme.colors.primary[400]};
    `,
    click: css`
      border: 1px solid ${theme.colors.primary[300]};
      background: ${theme.colors.primary[200]};
      color: ${theme.colors.primary[400]};
    `,
    focus: css`
      align-self: stretch;
      border: 1px solid ${theme.colors.primary[400]};
      background: ${theme.colors.white};
      color: ${theme.colors.primary[400]};
    `,
    disabled: css`
      border: 1px solid ${theme.colors.grayscale[300]};
      background: ${theme.colors.white};
      color: ${theme.colors.grayscale[300]};
    `,
  },
  danger: {
    enabled: css`
      background: ${theme.colors.error[300]};
      color: ${theme.colors.white};
    `,
    hover: css`
      background: ${theme.colors.error[400]};
      color: ${theme.colors.white};
    `,
    click: css`
      background: ${theme.colors.error[500]};
      color: ${theme.colors.white};
    `,
    focus: css`
      align-self: stretch;
      background: ${theme.colors.error[400]};
      color: ${theme.colors.white};
    `,
    disabled: css`
      background: ${theme.colors.grayscale[200]};
      color: ${theme.colors.grayscale[300]};
    `,
  },
};

interface ButtonLayoutProps {
  $size?: 'mini' | 'small' | 'regular' | 'wide';
  $styleType?: 'primary' | 'ghost' | 'danger';
  $event?: 'enabled' | 'hover' | 'disabled';
  $isArrow?: boolean;
  $disabled?: boolean;
}

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border-radius: 8px;
  border: none;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 13px 16px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.8)};
    transition-duration: 0.5s;
  }
  ${({ $size }) => $size && ButtonSize[$size]};
  ${({ $styleType, $event }) =>
    $event && $styleType && ButtonTypeEvent[$styleType][$event]};
`;

const ButtonWrapperBorderColor = {
  primary: css`
    border: 3px solid ${theme.colors.primary[200]};
  `,
  ghost: css`
    border: 3px solid ${theme.colors.primary[100]};
  `,
  danger: css`
    border: 3px solid ${theme.colors.error[100]};
  `,
};

const ButtonWrapperBackgroundSize = {
  mini: css`
    width: 36px;
    height: 36px;
    padding: 0px;
  `,
  small: css`
    width: 80px;
  `,
  regular: css`
    width: 120px;
  `,
  wide: css`
    width: 230px;
  `,
};

interface ButtonWrapperProps {
  $styleType?: 'primary' | 'ghost' | 'danger';
  $size?: 'mini' | 'small' | 'regular' | 'wide';
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  visibility: hidden;
  padding: 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;

  ${({ $styleType }) => $styleType && ButtonWrapperBorderColor[$styleType]};
  ${({ $size }) => $size && ButtonWrapperBackgroundSize[$size]};
  & > * {
    visibility: visible;
  }
`;

export const InvisibleInput = styled.input`
  display: none;
`;
