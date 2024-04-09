import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ProtectedRoute from '@/components/ProtectedRoute';
import PostVoteChart from '@/pages/PostDetail/components/Result';
import PostVote from '@/pages/PostDetail/components/Vote';
import Password from '@/pages/ProfileEdit/components/Password';
import UserInfo from '@/pages/ProfileEdit/components/UserInfo';
import {
  AdminPage,
  IntroducePage,
  LoginPage,
  MainPage,
  NotFoundPage,
  PostCreatePage,
  PostDetailPage,
  PostUpdatePage,
  ProfileEditPage,
  RequestToAdminPage,
  UserPage,
} from './pages';

export const router = createBrowserRouter([
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
            <PostDetailPage />
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
