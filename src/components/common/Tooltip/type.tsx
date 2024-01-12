export type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';
export type TooltipType = 'click' | 'focus' | 'hover';

export interface TooltipProps {
  message: string;
  type?: TooltipType;
  direction: TooltipDirection;
  hasArrow: boolean;
}
