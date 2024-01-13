import styled, { css } from 'styled-components';
import { TooltipDirection } from '@/components/Common/Tooltip/type';
import theme from '@/styles/theme';

interface TooltipArrowProps {
  direction: TooltipDirection;
}

const TooltipArrow = styled.div<TooltipArrowProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  background-color: transparent;

  ${({ direction }) => {
    const directionStyles = {
      top: css`
        left: 50%;
        top: 100%;
        transform: translateX(-50%) translateY(-0%);
        border-color: ${theme.colors.primary[100]} transparent transparent
          transparent;
      `,
      bottom: css`
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%) translateY(0%);
        border-color: transparent transparent ${theme.colors.primary[100]}
          transparent;
      `,
      left: css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%) translateX(0%);
        border-color: transparent transparent transparent
          ${theme.colors.primary[100]};
      `,
      right: css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%) translateX(0%);
        border-color: transparent ${theme.colors.primary[100]} transparent
          transparent;
      `,
    };

    return css`
      ${directionStyles[direction]}
      border-width: 0.5rem;
      content: '';
      position: absolute;
    `;
  }}
`;

export default TooltipArrow;
