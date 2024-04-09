import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '@/store';
import GlobalStyle from '@/styles/GlobalStyle';
import { Spinner } from './components/MainPageSpinner/style';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
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
  </Provider>,
);
