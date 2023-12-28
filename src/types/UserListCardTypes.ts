import { MockUser } from '@/components/UserListCard/mockUsers';

export interface UserListCardProps {
  users: MockUser[];
}

export type RenderUserSnippets = (
  users: MockUser[],
  title: string,
) => JSX.Element;
