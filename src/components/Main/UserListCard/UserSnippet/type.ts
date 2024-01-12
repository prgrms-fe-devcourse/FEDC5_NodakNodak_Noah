export interface UserSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  fullName: string;
  isOnline: boolean;
  handleClick?: () => void;
  isFollowing: boolean;
  image: string;
  userId: string;
  style?: React.CSSProperties;
}

export interface UserSnippetGroupProps {
  title?: string;
}
