import { MainWrapper, PostContentWrapper } from '@/pages/MainPage/style';
import PostList from '@/components/Main/PostList';
import UserList from '@/components/Main/UserList';
import ContentHeader from '@/components/Main/ContentHeader';

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
