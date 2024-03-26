import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from '@/components/common/ProtectedRoute';

import store from '@/store';
import App from '@/App';
import AdminPage from '@/pages/Admin';
import MainPage from '@/pages/Main';
import LoginPage from '@/pages/Sign';
import IntroducePage from '@/pages/Introduce';
import UserPage from '@/pages/Profile';
import ProfileEditPage from '@/pages/ProfileEdit';
import NotFoundPage from '@/pages/NotFound';
import DetailPage from '@/pages/PostDetail';
import PostCreatePage from '@/pages/PostCreate';
import PostUpdatePage from '@/pages/PostUpdate';
import PostVoteChart from '@/components/Post/Detail/Result';
import PostVote from '@/components/Post/Detail/Vote';
import RequestToAdminPage from '@/pages/RequestToAdmin';
import UserInfo from '@/components/Setting/UserInfo';
import Password from '@/components/Setting/Password';
import GlobalStyle from '@/styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroducePage />,
    errorElement: <NotFoundPage />,
    index: true,
  },
  {
    path: '/user/:userId/setting/',
    element: (
      <ProtectedRoute>
        <ProfileEditPage />
      </ProtectedRoute>
    ),
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
      { path: '/home/:channelId?', element: <MainPage /> },
      { path: '/user/:userId', element: <UserPage /> },
      {
        path: '/request',
        element: (
          <ProtectedRoute>
            <RequestToAdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin',
        element: (
          <ProtectedRoute admin>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/detail/:channelId/:postId/',
        element: (
          <ProtectedRoute>
            <DetailPage />
          </ProtectedRoute>
        ),
        children: [
          { path: '', element: <PostVote /> },
          { path: 'result', element: <PostVoteChart /> },
        ],
      },
    ],
  },
  { path: '/sign', element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
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
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
);
