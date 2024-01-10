import { PropsWithChildren } from 'react';

import { BadgeProps } from '@/components/common/Badge/BadgeProps';
import { BadgeContainer, Super } from '@/components/common/Badge/style';

const Badge = ({
  children,
  count,
  dot = false,
  ...props
}: PropsWithChildren<BadgeProps>) => {
  let badge = null;
  const maxCount = 999;
  if (count) {
    badge = (
      <Super>{maxCount && count > maxCount ? `${maxCount}+` : count}</Super>
    );
    if (dot) {
      badge = <Super className='dot' />;
    }
  }

  return (
    <BadgeContainer style={{ ...props.style }}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;
