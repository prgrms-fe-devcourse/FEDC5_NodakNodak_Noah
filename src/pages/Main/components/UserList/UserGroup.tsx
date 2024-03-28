import { Title } from './style';
import { PropsWithChildren } from 'react';

export interface UserSnippetGroupProps {
  title?: string;
}

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
