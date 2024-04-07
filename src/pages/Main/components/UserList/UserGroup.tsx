import { PropsWithChildren } from 'react';
import { Title } from './style';

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
