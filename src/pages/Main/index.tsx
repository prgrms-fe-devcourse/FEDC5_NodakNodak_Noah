import ContentHeader from '@/pages/Main/components/ContentHeader';
import PostList from '@/pages/Main/components/PostList';
import UserList from '@/pages/Main/components/UserList';
import { MainWrapper, PostContentWrapper } from '@/pages/Main/style';

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
