import { MainWrapper, PostContentWrapper } from '@/pages/Main/style';
import PostList from '@/pages/Main/components/PostList';
import UserList from '@/pages/Main/components/UserList';
import ContentHeader from '@/pages/Main/components/ContentHeader';

const Main = () => {
  return (
    <MainWrapper>
      <PostContentWrapper>
        <ContentHeader />
        <PostList />
      </PostContentWrapper>
      <UserList />
    </MainWrapper>
  );
};

export default Main;
