import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
import NotFound from './pages/NotFound.tsx';
import PostEditPage from './pages/PostEditPage';
import Main from './pages/mainPage';
import UserPage from './pages/userPage/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <NotFound /> },
  { path: '/sign', element: <Login /> },
  { path: '/write', element: <PostEditPage mode='create' /> },
  { path: '/home', element: <Main /> },
  { path: '/user', element: <UserPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
