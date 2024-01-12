import styled, { css } from 'styled-components';

type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';

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
        border-color: #faf7e8 transparent transparent transparent;
      `,
      bottom: css`
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%) translateY(0%);
        border-color: transparent transparent #faf7e8 transparent; /* 삼각형 색상 조절 */
      `,
      left: css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%) translateX(0%);
        border-color: transparent transparent transparent #faf7e8; /* 삼각형 색상 조절 */
      `,
      right: css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%) translateX(0%);
        border-color: transparent #faf7e8 transparent transparent; /* 삼각형 색상 조절 */
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
