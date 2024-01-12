import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useHover from '@/hooks/useHover';
import TooltipArrow from '@/components/common/Tooltip/TooltipArrow';

const TooltipContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
`;

const getBoxShadow = (direction: TooltipDirection) => {
  const shadowCommon = '12px rgba(0, 0, 0, 0.2)';
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

const TooltipContent = styled.span<{
  direction: TooltipDirection;
}>`
  position: absolute;
  z-index: 10;
  border-radius: 0.375rem;
  background-color: #faf7e8;
  padding: 10px;
  text-align: center;
  color: #000;
  width: 100px;
  max-width: 300px;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: ${({ direction }) => getBoxShadow(direction)};

  ${({ direction }) => {
    const directionStyles = {
      top: 'bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-0.5rem); margin-bottom:12px;',
      bottom:
        'top: 100%; left: 50%; transform: translateX(-50%) translateY(0.5rem); margin-top:12px;',
      left: 'top: 50%; right: 100%; transform: translateY(-50%) translateX(-0.5rem);margin-right:12px;',
      right:
        'top: 50%; left: 100%; transform: translateY(-50%) translateX(0.5rem); margin-left:12px;',
    };

    return directionStyles[direction];
  }}
`;

type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';
type TooltipType = 'click' | 'focus' | 'hover';
interface TooltipProps {
  message: string;
  type?: TooltipType;
  direction: TooltipDirection;
  hasArrow: boolean;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  type,
  hasArrow,
  message,
  direction,
  children,
}) => {
  const [ref, isHovered] = useHover();
  const [show, setShow] = React.useState(false);
  const tooltipRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!type) {
      return;
    }
    const handleEvent = () => {
      setShow((prevShow) => !prevShow);
    };

    const targetElement = ref.current;

    if (targetElement) {
      if (type === 'hover') {
        setShow(isHovered);
      } else {
        targetElement.addEventListener(type, handleEvent);
      }

      return () => {
        targetElement.removeEventListener(type, handleEvent);
      };
    }
  }, [type, isHovered, ref]);

  return (
    <TooltipContainer>
      {React.cloneElement(React.Children.only(children) as React.ReactElement, {
        ref,
      })}
      {show && (
        <TooltipContent
          ref={tooltipRef}
          direction={direction}
          onAnimationEnd={() => {
            if (!show) {
              tooltipRef.current?.remove();
              tooltipRef.current = null;
            }
          }}>
          {message.split(',').map((item, index) => (
            <React.Fragment key={index}>
              {item}
              <br />
            </React.Fragment>
          ))}
          {hasArrow && <TooltipArrow direction={direction} />}
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
