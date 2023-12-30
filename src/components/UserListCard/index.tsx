import { UserListCardProps, RenderUserSnippets } from './UserListCardTypes';
import UserSnippet from '@/components/UserSnippet';
import Card from '@/components/Card';
import ScrollBar from '@/components/ScrollBar';

const UserListCard = ({ users }: UserListCardProps) => {
  const onlineUsers = users.filter((user) => user.isOnline);
  const offlineUsers = users.filter((user) => !user.isOnline);

  const renderUserSnippets: RenderUserSnippets = (users, title) => (
    <UserSnippet.Group title={title}>
      {users.map((user) => (
        <UserSnippet
          fullName={user.fullName}
          image={user.image}
          isFollowing={user.isFollowing}
          isOnline={user.isOnline}
          key={user._id}
        />
      ))}
    </UserSnippet.Group>
  );

  return (
    <Card width='223px' height='626px' shadowType='medium'>
      <ScrollBar>
        {renderUserSnippets(onlineUsers, `online - ${onlineUsers.length}`)}
        {renderUserSnippets(offlineUsers, `offline - ${offlineUsers.length}`)}
      </ScrollBar>
    </Card>
  );
};

export default UserListCard;
