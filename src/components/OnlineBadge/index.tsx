import { BadgeContainer, Super } from './StyledBadge';
import { PropsWithChildren } from 'react';
import { OnlineBadgePropsTypes } from '@/types/OnlineBadgePropsTypes';

const OnLineBadge = ({
  children,
  isOnline = false,
  isFollowing = false,
}: PropsWithChildren<OnlineBadgePropsTypes>) => {
  return (
    <BadgeContainer>
      {children}
      <Super className='dot' isOnline={isOnline} isFollowing={isFollowing} />
    </BadgeContainer>
  );
};

export default OnLineBadge;
