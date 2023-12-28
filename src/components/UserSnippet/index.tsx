import { UserSnippetBox, Title } from './StyledUserSnippet';
import Avatar from '../Avatar';
import OnLineBadge from '../OnlineBadge';
import { PropsWithChildren } from 'react';

import {
  UserSnippetProps,
  UserSnippetGroupProps,
} from '@/types/UserSnippetProps';

const UserSnippet = ({
  isOnline,
  image,
  fullName,
  isFollowing,
}: UserSnippetProps) => {
  return (
    <UserSnippetBox>
      <OnLineBadge isOnline={isOnline} isFollowing={isFollowing}>
        <Avatar src={image} alt={fullName} size='small' />
      </OnLineBadge>
      {fullName}
    </UserSnippetBox>
  );
};

UserSnippet.Group = ({
  title,
  children,
}: PropsWithChildren<UserSnippetGroupProps>) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

export default UserSnippet;
