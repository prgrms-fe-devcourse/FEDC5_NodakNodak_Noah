import { PropsWithChildren } from 'react';
import { BadgeBox, Super } from '@/components/Badge/style';

export interface BadgeProps {
  count?: number;
  style?: React.CSSProperties;
}

const Badge = ({
  children,
  count,
  ...props
}: PropsWithChildren<BadgeProps>) => {
  let badge = null;
  const maxCount = 999;
  if (count) {
    badge = (
      <Super>{maxCount && count > maxCount ? `${maxCount}+` : count}</Super>
    );
  }

  return (
    <BadgeBox style={{ ...props.style }}>
      {children}
      {badge}
    </BadgeBox>
  );
};

export default Badge;
