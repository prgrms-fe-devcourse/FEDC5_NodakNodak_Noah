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

import PostVote from './pages/DetailPage/PostVote/index.tsx';
import PostVoteChart from './pages/DetailPage/PostVoteChart/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <NotFound />, index: true },
  { path: '/user/:userId/setting', element: <Setting /> },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/update/:channelId/:postId', element: <PostUpdatePage /> },
      { path: '/write/:channelId', element: <PostCreatePage /> },
      { path: '/home/:channelId?', element: <Main /> },
      { path: '/user/:userId', element: <UserPage /> },
      {
        path: '/detail/:channelId/:postId/',
        element: <DetailPage />,
        children: [
          { path: '', element: <PostVote /> },
          { path: 'result', element: <PostVoteChart /> },
        ],
      },
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
