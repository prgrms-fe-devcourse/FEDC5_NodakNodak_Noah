import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, OnLineBadge } from '@/components/common';
import { UserSnippetBox } from '@/components/Main/style';
import {
  UserSnippetProps,
  UserSnippetGroupProps,
} from '@/components/Main/UserListCard/UserSnippet/type';
import { Title } from '@/components/Main/UserListCard/UserSnippet/style';

const UserSnippet = ({
  isOnline,
  handleClick,
  image,
  fullName,
  isFollowing,
  userId,
  ...props
}: UserSnippetProps) => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <UserSnippetBox
      onClick={handleClick || handleUserClick}
      style={{ ...props.style }}>
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
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
};

export default UserSnippet;
