import { PropsWithChildren } from 'react';

import { Title } from '@/pages/Main/components/UserList/UserGroup/style';
import { UserSnippetGroupProps } from '@/pages/Main/components/UserList/UserGroup/type';

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
