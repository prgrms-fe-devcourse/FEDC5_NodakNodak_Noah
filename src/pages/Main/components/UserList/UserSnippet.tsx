import { useNavigate } from 'react-router-dom';
import { UserSnippetBox } from '@/pages/Main/components/style';
import { Avatar, OnLineBadge } from '@/components';

export interface UserSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  isOnline: boolean;
  handleClick?: () => void;
  isFollowing: boolean;
  image: string;
  userId: string;
  style?: React.CSSProperties;
}

const UserSnippet = ({
  isOnline,
  handleClick,
  image,
  text,
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
        <Avatar src={image} alt={text} size='small' />
      </OnLineBadge>
      {text}
    </UserSnippetBox>
  );
};

export default UserSnippet;
