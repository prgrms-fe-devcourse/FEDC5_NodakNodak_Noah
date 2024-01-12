import React, { useEffect, useRef, PropsWithChildren } from 'react';
import useHover from '@/hooks/useHover';
import TooltipContainer, {
  TooltipContent,
} from '@/components/common/Tooltip/style';
import TooltipArrow from '@/components/common/Tooltip/TooltipArrow';
import { TooltipProps } from '@/components/common/Tooltip/type';

const Tooltip = ({
  type,
  hasArrow,
  message,
  direction,
  children,
}: PropsWithChildren<TooltipProps>) => {
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
