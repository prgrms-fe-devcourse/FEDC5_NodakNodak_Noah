import { UserSnippetBox, Title } from './StyledUserSnippet';
import { UserSnippetProps, UserSnippetGroupProps } from './UserSnippetProps';
import Avatar from '../Avatar';
import OnLineBadge from '../OnlineBadge';
import { PropsWithChildren } from 'react';

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
