import { PropsWithChildren } from 'react';

import { Title } from '@/components/Main/UserList/UserGroup/style';
import { UserSnippetGroupProps } from '@/components/Main/UserList/UserGroup/type';

const UserGroup = ({
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

export default UserGroup;
