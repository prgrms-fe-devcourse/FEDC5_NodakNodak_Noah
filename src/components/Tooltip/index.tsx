import {
  Children,
  Fragment,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import TooltipArrow from '@/components/Tooltip/TooltipArrow';
import { TooltipBox, TooltipContent } from '@/components/Tooltip/style';
import useHover from '@/hooks/useHover';

export type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';
export type TooltipType = 'click' | 'focus' | 'hover';

export interface TooltipProps {
  message: string;
  type?: TooltipType;
  direction: TooltipDirection;
  hasArrow: boolean;
}

const Tooltip = ({
  type,
  hasArrow,
  message,
  direction,
  children,
}: PropsWithChildren<TooltipProps>) => {
  const [ref, isHovered] = useHover();
  const [show, setShow] = useState(false);
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

  const childElement = Children.only(children) as ReactElement;

  return (
    <TooltipBox>
      <span ref={ref}>{childElement}</span>
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
            <Fragment key={index}>
              {item}
              <br />
            </Fragment>
          ))}
          {hasArrow && <TooltipArrow direction={direction} />}
        </TooltipContent>
      )}
    </TooltipBox>
  );
};

export default Tooltip;