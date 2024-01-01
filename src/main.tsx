import Index from './pages/Index.tsx';
import Login from './pages/Login.tsx';
import NotFound from './pages/NotFound.tsx';
import PostEditPage from './pages/PostEditPage';
import Main from './pages/mainPage';
import UserPage from './pages/userPage/index.tsx';
import store from './store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  { path: '/', element: <Index />, errorElement: <NotFound /> },
  { path: '/sign', element: <Login /> },
  { path: '/write', element: <PostEditPage /> },
  { path: '/home', element: <Main /> },
  { path: '/user', element: <UserPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
