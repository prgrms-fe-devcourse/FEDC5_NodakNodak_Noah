import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@/components/Common/Avatar';
import OnLineBadge from '@/components/Common/OnlineBadge';
import {
  UserSnippetProps,
  UserSnippetGroupProps,
} from '@/components/Main/UserSnippet/UserSnippetProps';
import {
  UserSnippetBox,
  Title,
} from '@/components/Main/UserSnippet/styledUserSnippet';

const UserSnippet = ({
  isOnline,
  image,
  fullName,
  isFollowing,
  userId,
}: UserSnippetProps) => {
  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <UserSnippetBox onClick={handleUserClick}>
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
