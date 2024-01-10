import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/App';
import store from '@/store';
import Main from '@/pages/MainPage';
import Login from '@/pages/SignPage';
import Index from '@/pages/IndexPage';
import UserPage from '@/pages/UserPage';
import Setting from '@/pages/SettingPage';
import NotFound from '@/pages/NotFoundPage';
import DetailPage from '@/pages/DetailPage';
import PostCreatePage from '@/pages/PostPage';
import PostUpdatePage from '@/pages/UpdatePage';
import PostVoteChart from '@/components/Post/Detail/Result';
import PostVote from '@/components/Post/Detail/Vote';

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
