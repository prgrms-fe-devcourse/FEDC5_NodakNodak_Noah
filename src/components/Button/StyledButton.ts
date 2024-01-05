import { styled, css } from 'styled-components';
import theme from '@/styles/theme';

export const ButtonSize = {
  mini: css`
    display: flex;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
  `,
  small: css`
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  regular: css`
    display: flex;
    width: 120px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  wide: css`
    display: flex;
    width: 230px;
    min-width: 200px;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
};

export const ButtonTypeEvent = {
  primary: {
    enabled: css`
      background: ${theme.colors.primary[200]};
      color: ${theme.colors.grayscale[400]};
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
      border: 1px solid ${theme.colors.primary[200]};
      background: ${theme.colors.white};
      color: ${theme.colors.primary[400]};
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
  text: {
    enabled: css`
      color: ${theme.colors.info[300]};
    `,
    hover: css`
      background: ${theme.colors.info[100]};
      color: ${theme.colors.info[300]};
    `,
    click: css`
      background: ${theme.colors.info[100]};
      color: ${theme.colors.info[300]};
    `,
    focus: css`
      align-self: stretch;
      background: ${theme.colors.white};
      color: ${theme.colors.info[300]};
    `,
    disabled: css`
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
  $styleType?: 'primary' | 'ghost' | 'text' | 'danger';
  $event?: 'enabled' | 'hover' | 'click' | 'focus' | 'disabled';
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
  cursor: pointer;

  ${({ $size }) => $size && ButtonSize[$size]};
  ${({ $styleType, $event }) =>
    $event && $styleType && ButtonTypeEvent[$styleType][$event]};
  padding: ${({ $isArrow }) =>
    $isArrow ? '13px 12px 13px 16px' : '13px 16px'};
`;

const ButtonWrapperBorderColor = {
  primary: css`
    border: 3px solid ${theme.colors.primary[200]};
  `,
  ghost: css`
    border: 3px solid ${theme.colors.primary[100]};
  `,
  text: css`
    border: 3px solid ${theme.colors.info[100]};
  `,
  danger: css`
    border: 3px solid ${theme.colors.error[100]};
  `,
};

const ButtonWrapperBackgroundSize = {
  mini: css`
    width: 36px;
    height: 36px;
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
  $isActive: boolean;
  $styleType?: 'primary' | 'ghost' | 'text' | 'danger';
  $size?: 'mini' | 'small' | 'regular' | 'wide';
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
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
