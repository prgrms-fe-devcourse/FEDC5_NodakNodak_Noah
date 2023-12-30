import { BadgeContainer, Super } from './StyledBadge';
import { OnlineBadgePropsTypes } from './OnlineBadgePropsTypes';
import { PropsWithChildren } from 'react';

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
