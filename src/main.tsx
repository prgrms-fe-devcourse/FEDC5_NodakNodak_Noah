import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from '@/components/common/ProtectedRoute';

import App from '@/App';
import Admin from '@/pages/AdminPage';
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
import RequestToAdmin from '@/pages/RequestPage';
import UserInfo from '@/components/Setting/UserInfo';
import Password from '@/components/Setting/Password';
import GlobalStyle from '@/styles/GlobalStyle';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <NotFound />, index: true },
  {
    path: '/user/:userId/setting/',
    element: <Setting />,
    children: [
      { path: '', element: <UserInfo /> },
      { path: 'password', element: <Password /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/update/:postId',
        element: (
          <ProtectedRoute>
            <PostUpdatePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/write/:channelId',
        element: (
          <ProtectedRoute>
            <PostCreatePage />
          </ProtectedRoute>
        ),
      },
      { path: '/home/:channelId?', element: <Main /> },
      { path: '/user/:userId', element: <UserPage /> },
      {
        path: '/request',
        element: (
          <ProtectedRoute>
            <RequestToAdmin />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin',
        element: (
          <ProtectedRoute admin>
            <Admin />
          </ProtectedRoute>
        ),
      },
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
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Helmet>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap'
          />
        </Helmet>
        <GlobalStyle />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
