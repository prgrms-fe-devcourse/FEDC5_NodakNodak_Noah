import { PropsWithChildren } from 'react';

import { BadgeContainer, Super } from '@/components/common/OnlineBadge/style';
import { OnlineBadgePropsTypes } from '@/components/common/OnlineBadge/type';

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
