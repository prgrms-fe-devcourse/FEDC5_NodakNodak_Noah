import Footer from './components/Footer';
import Header from './components/Header';
import { mockChannels } from './components/Header/mockChannels';
import { mockUsers } from './components/UserListCard/mockUsers';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header
        channels={mockChannels}
        isAuth={!!localStorage.getItem('auth-token')}
        userImage={mockUsers[0].image}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
