import { PropsWithChildren } from 'react';
import { BadgeBox, Super } from './style';

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
    <BadgeBox>
      {children}
      <Super className='dot' $isOnline={isOnline} $isFollowing={isFollowing} />
    </BadgeBox>
  );
};

export default OnLineBadge;
