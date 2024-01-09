import { PropsWithChildren } from 'react';

import {
  BadgeContainer,
  Super,
} from '@/components/Common/OnlineBadge/styledBadge';
import { OnlineBadgePropsTypes } from '@/components/Common/OnlineBadge/OnlineBadgeProps';

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
