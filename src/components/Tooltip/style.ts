import styled from 'styled-components';
import theme from '@/styles/theme';
import { TooltipDirection } from '.';

export const TooltipBox = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
`;

export const TooltipContent = styled.span<{ direction: TooltipDirection }>`
  position: absolute;
  z-index: 10;
  border-radius: 0.375rem;
  background-color: ${theme.colors.primary[100]};
  padding: 10px;
  text-align: center;
  color: ${theme.colors.black};
  width: 100px;
  max-width: 300px;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: ${({ direction }) => getBoxShadow(direction)};

  ${({ direction }) => {
    const directionStyles = {
      top: 'bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-0.5rem); margin-bottom:8px;',
      bottom:
        'top: 100%; left: 50%; transform: translateX(-50%) translateY(0.5rem); margin-top:8px;',
      left: 'top: 50%; right: 100%; transform: translateY(-50%) translateX(-0.5rem);margin-right:8px;',
      right:
        'top: 50%; left: 100%; transform: translateY(-50%) translateX(0.5rem); margin-left:8px;',
    };

    return directionStyles[direction];
  }}
`;

export const getBoxShadow = (direction: TooltipDirection) => {
  const shadowCommon = `12px rgba(0,0,0,0.2)`;
  switch (direction) {
    case 'top':
      return `0 5px ${shadowCommon}`;
    case 'bottom':
      return `0 -5px ${shadowCommon}`;
    case 'left':
      return `10px 2px ${shadowCommon}`;
    case 'right':
      return `-5px 2px ${shadowCommon}`;
    default:
      return 'none';
  }
};

export default TooltipBox;
