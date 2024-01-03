import { BadgeContainer, Super } from './StyledBadge';
import BadgeProps from './BadgeProps';
import { PropsWithChildren } from 'react';

const Badge = ({
  children,
  count,
  dot = false,
  onClick = () => {},
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
    <BadgeContainer style={{ ...props.style }} onClick={onClick}>
      {children}
      {badge}
    </BadgeContainer>
  );
};

export default Badge;
