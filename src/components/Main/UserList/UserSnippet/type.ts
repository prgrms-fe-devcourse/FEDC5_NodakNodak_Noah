export interface UserSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  isOnline: boolean;
  handleClick?: () => void;
  isFollowing: boolean;
  image: string;
  userId: string;
  style?: React.CSSProperties;
}
