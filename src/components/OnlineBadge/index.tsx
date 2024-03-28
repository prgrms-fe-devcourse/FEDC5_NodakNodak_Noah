import { PropsWithChildren } from 'react';

import { BadgeContainer, Super } from '@/components/OnlineBadge/style';

export interface OnlineBadgePropsTypes {
  isOnline: boolean;
  isFollowing: boolean;
}

const OnLineBadge = ({
  children,
  isOnline = false,
  isFollowing = false,
}: PropsWithChildren<OnlineBadgePropsTypes>) => {
  return (
    <BadgeContainer>
      {children}
      <Super className='dot' $isOnline={isOnline} $isFollowing={isFollowing} />
    </BadgeContainer>
  );
};

export default OnLineBadge;
