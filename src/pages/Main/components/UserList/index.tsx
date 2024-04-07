import { Card, ScrollBar } from '@/components';
import UserGroup from '@/pages/Main/components/UserList/UserGroup';
import UserSnippet from '@/pages/Main/components/UserList/UserSnippet';
import useGetUserList from '@/pages/Main/components/hooks/useGetUsers';

export type RenderUserSnippets = (
  users: {
    image: string;
    isOnline: boolean;
    isFollowing: boolean;
    fullName: string;
    _id: string;
  }[],
  title: string,
) => JSX.Element;

const UserList = () => {
  const { userSnippetList } = useGetUserList();

  const onlineUsers = userSnippetList.filter((user) => user.isOnline);
  const offlineUsers = userSnippetList.filter((user) => !user.isOnline);

  const renderUserSnippets: RenderUserSnippets = (users, title) => (
    <UserGroup title={title}>
      {users.map(({ fullName, image, isFollowing, isOnline, _id }) => (
        <UserSnippet
          text={fullName}
          image={image}
          isFollowing={isFollowing}
          isOnline={isOnline}
          userId={_id}
          key={_id}
        />
      ))}
    </UserGroup>
  );

  return (
    <Card
      width='223px'
      height='626px'
      shadowType='medium'
      style={{ marginTop: '96px' }}>
      <ScrollBar>
        {renderUserSnippets(onlineUsers, `online - ${onlineUsers.length}`)}
        {renderUserSnippets(offlineUsers, `offline - ${offlineUsers.length}`)}
      </ScrollBar>
    </Card>
  );
};

export default UserList;
