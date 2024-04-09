import { lazy } from 'react';

const AdminPage = lazy(() => import('@/pages/Admin'));
const MainPage = lazy(() => import('@/pages/Main'));
const IntroducePage = lazy(() => import('@/pages/Introduce'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
const ProfileEditPage = lazy(() => import('@/pages/ProfileEdit'));
const RequestToAdminPage = lazy(() => import('@/pages/RequestToAdmin'));
const PostUpdatePage = lazy(() => import('@/pages/PostUpdate'));
const LoginPage = lazy(() => import('@/pages/Sign'));
const PostDetailPage = lazy(() => import('@/pages/PostDetail'));
const PostCreatePage = lazy(() => import('@/pages/PostCreate'));
const UserPage = lazy(() => import('@/pages/Profile'));

export {
  AdminPage,
  MainPage,
  IntroducePage,
  NotFoundPage,
  ProfileEditPage,
  RequestToAdminPage,
  PostUpdatePage,
  LoginPage,
  PostDetailPage,
  PostCreatePage,
  UserPage,
};
