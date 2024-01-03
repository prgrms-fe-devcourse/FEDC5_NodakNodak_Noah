import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
import NotFound from './pages/NotFound.tsx';
import PostUpdatePage from './pages/PostEditPage/PostUpdatePage';
import PostCreatePage from './pages/PostEditPage/PostCreatePage';
import DetailPage from './pages/DetailPage';
import Main from './pages/mainPage';
import UserPage from './pages/userPage/index';
import Setting from './pages/SettingModal/Setting';
import App from './App.tsx';
import store from './store';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <NotFound />, index: true },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/update', element: <PostUpdatePage /> },
      { path: '/write', element: <PostCreatePage /> },
      { path: '/home', element: <Main /> },
      { path: '/user', element: <UserPage /> },
      { path: '/user/setting', element: <Setting /> },
      { path: '/detail', element: <DetailPage /> },
    ],
  },
  { path: '/sign', element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
