import { styled, css } from 'styled-components';

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
      background: var(--Primary-200, #e3d4b3);
      color: var(--Grayscale-400, #343a40);
    `,
    hover: css`
      background: var(--Primary-300, #c8b593);
      color: var(--Grayscale-400, #343a40);
    `,
    click: css`
      background: var(--Primary-400, #8d714d);
      color: var(--Grayscale-100, #f9f9f9);
    `,
    focus: css`
      align-self: stretch;
      background: var(--Primary-300, #c8b593);
      color: var(--Grayscale-500, #212529);
    `,
    disabled: css`
      background: var(--Grayscale-200, #dee2e6);
      color: var(--Grayscale-300, #868e96);
    `,
  },
  ghost: {
    enabled: css`
      border: 1px solid var(--Primary-200, #e3d4b3);
      background: var(--White, #fff);
      color: var(--Primary-400, #8d714d);
    `,
    hover: css`
      border: 1px solid var(--Primary-300, #c8b593);
      background: var(--Primary-100, #faf6e8);
      color: var(--Primary-400, #8d714d);
    `,
    click: css`
      border: 1px solid var(--Primary-300, #c8b593);
      background: var(--Primary-200, #e3d4b3);
      color: var(--Primary-400, #8d714d);
    `,
    focus: css`
      align-self: stretch;
      border: 1px solid var(--Primary-400, #8d714d);
      background: var(--White, #fff);
      color: var(--Primary-400, #8d714d);
    `,
    disabled: css`
      border: 1px solid var(--Grayscale-300, #868e96);
      background: var(--White, #fff);
      color: var(--Grayscale-300, #868e96);
    `,
  },
  text: {
    enabled: css`
      color: var(--Info-300, #5c7cfa);
    `,
    hover: css`
      background: var(--Info-100, #edf2ff);
      color: var(--Info-300, #5c7cfa);
    `,
    click: css`
      background: var(--Info-100, #edf2ff);
      color: var(--Info-300, #5c7cfa);
    `,
    focus: css`
      align-self: stretch;
      background: var(--White, #fff);
      color: var(--Info-300, #5c7cfa);
    `,
    disabled: css`
      background: var(--White, #fff);
      color: var(--Grayscale-300, #868e96);
    `,
  },
  danger: {
    enabled: css`
      background: var(--Error-300, #ff6b6b);
      color: var(--White, #fff);
    `,
    hover: css`
      background: var(--Error-400, #f03e3e);
      color: var(--White, #fff);
    `,
    click: css`
      background: var(--Error-500, #c92a2a);
      color: var(--White, #fff);
    `,
    focus: css`
      align-self: stretch;
      background: var(--Error-400, #f03e3e);
      color: var(--white, #fff);
    `,
    disabled: css`
      background: var(--Grayscale-200, #dee2e6);
      color: var(--Grayscale-300, #868e96);
    `,
  },
};

export const ButtonLayout = styled.button<{
  $size?: 'mini' | 'small' | 'regular' | 'wide';
  $styleType?: 'primary' | 'ghost' | 'text' | 'danger';
  $event?: 'enabled' | 'hover' | 'click' | 'focus' | 'disabled';
  $isArrow?: boolean;
  $disabled?: boolean;
}>`
  border-radius: 8px;
  border: none;

  text-align: center;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  ${({ $size }) => $size && ButtonSize[$size]}
  ${({ $styleType, $event }) =>
    $event && $styleType && ButtonTypeEvent[$styleType][$event]}
  padding:${({ $isArrow }) => ($isArrow ? '13px 12px 13px 16px' : '13px 16px')};
`;

const ButtonWrapperBorderColor = {
  primary: css`
    border: 3px solid var(--Primary-200, #e3d4b3);
  `,
  ghost: css`
    border: 3px solid var(--Primary-100, #faf6e8);
  `,
  text: css`
    border: 3px solid var(--Info-100, #edf2ff);
  `,
  danger: css`
    border: 3px solid var(--Error-100, #fff5f5);
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

export const ButtonWrapper = styled.div<{
  $isActive: boolean;
  $styleType?: 'primary' | 'ghost' | 'text' | 'danger';
  $size?: 'mini' | 'small' | 'regular' | 'wide';
}>`
  visibility: ${({ $isActive }) => ($isActive ? 'visible' : 'hidden')};
  padding: 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 12px;

  ${({ $styleType }) => $styleType && ButtonWrapperBorderColor[$styleType]}
  ${({ $size }) => $size && ButtonWrapperBackgroundSize[$size]}
  & > * {
    visibility: visible;
  }
`;
