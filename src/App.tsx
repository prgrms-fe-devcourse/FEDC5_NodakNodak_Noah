import Footer from './components/Footer';
import Header from './components/Header';
import { mockUsers } from './components/UserListCard/mockUsers';
import { getChannel } from './slices/channel';
import { useDispatch, RootState } from './store';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const channels = useSelector((state: RootState) => state.channel.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannel());
  }, [dispatch]);
  return (
    <>
      <Header
        channels={channels}
        isAuth={!!localStorage.getItem('auth-token')}
        userImage={mockUsers[0].image}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
