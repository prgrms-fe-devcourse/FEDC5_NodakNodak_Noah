import axios, { AxiosError } from 'axios';

import store from '@/store';
import { startLoading, finishLoading } from '@/slices/loading';

const axiosInstance = axios.create({
  baseURL: 'https://kdt.frontend.5th.programmers.co.kr:5003',
  timeout: 10000,
});

const authRequiredUrlList = [
  '/auth-user',
  '/users/upload-photo',
  '/settings/update-password',
  '/settings/update-user',
  '/posts/create',
  '/posts/update',
  '/posts/delete',
  '/likes/create',
  '/likes/delete',
  '/comments/create',
  '/comments/delete',
  '/notifications',
  '/notifications/seen',
  '/notifications/create',
  '/follow/create',
  '/follow/delete',
  '/messages/conversations',
  '/messages',
  '/messages/create',
  '/messages/update-seen',
];

const formHeaderRequiredUrlList = ['/users/upload-photo'];

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(startLoading());
    const token = localStorage.getItem('auth-token');

    if (
      token &&
      authRequiredUrlList.includes(
        config.url ? ensureLeadingSlash(config.url) : '',
      )
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (
      formHeaderRequiredUrlList.includes(
        config.url ? ensureLeadingSlash(config.url) : '',
      )
    ) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  function (error: AxiosError) {
    store.dispatch(finishLoading());
    // eslint-disable-next-line no-console
    console.error(`요청 인터셉터 에러: ${error.message}`);

    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(finishLoading());
    return response;
  },
  (error: AxiosError) => {
    // eslint-disable-next-line no-console
    console.error(error);
    store.dispatch(finishLoading());
    if (error.response) {
      // eslint-disable-next-line no-console
      console.error(`응답 에러: ${error.response.status}`);
    } else if (error.request) {
      // eslint-disable-next-line no-console
      console.error(`응답 없음: ${error}`);
    } else {
      // eslint-disable-next-line no-console
      console.error(`네트워크 에러 ${error.message}`);
    }
    // eslint-disable-next-line no-console
    console.error(`에러 메시지: ${error.message}`);
    return Promise.reject(error);
  },
);

export default axiosInstance;

const ensureLeadingSlash = (url: string) => {
  return url.startsWith('/') ? url : `/${url}`;
};
