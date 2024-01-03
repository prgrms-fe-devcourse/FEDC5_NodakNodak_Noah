export interface UserSnippet {
  image: string;
  isOnline: boolean;
  isFollowing: boolean;
  fullName: string;
  _id: string;
}
export interface UserListCardProps {
  users: UserSnippet[];
}

export type RenderUserSnippets = (
  users: UserSnippet[],
  title: string,
) => JSX.Element;
