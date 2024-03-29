import { PropsWithChildren } from 'react';

import { BadgeProps } from '@/components/common/Badge/type';
import { BadgeContainer, Super } from '@/components/common/Badge/style';

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
    <BadgeContainer style={{ ...props.style }}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;
