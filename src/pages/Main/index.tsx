import { Outlet } from 'react-router-dom';
import ContentHeader from '@/pages/Main/components/ContentHeader';
import UserList from '@/pages/Main/components/UserList';
import { MainWrapper, PostContentWrapper } from '@/pages/Main/style';

const Main = () => {
  return (
    <MainWrapper>
      <PostContentWrapper>
        <ContentHeader />
        <Outlet />
      </PostContentWrapper>
      <UserList />
    </MainWrapper>
  );
};

export default Main;
