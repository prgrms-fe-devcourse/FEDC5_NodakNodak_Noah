import { RefObject } from 'react';

export interface BadgeProps {
  count?: number;
  dot?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  ref?: RefObject<HTMLDivElement>;
}

export default BadgeProps;
