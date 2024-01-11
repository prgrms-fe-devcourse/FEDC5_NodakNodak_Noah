import axios, { AxiosError } from 'axios';

import store from '@/store';
import { setFetchingState } from '@/slices/status';
import { AllUrlList, Methods } from '@/utils/customAxios/type';
import {
  authRequiredUrlList,
  formHeaderRequiredUrlList,
} from '@/utils/customAxios/constants';
import { ensureLeadingSlash } from '@/utils/customAxios/utils';

const axiosInstance = axios.create({
  baseURL: 'https://kdt.frontend.5th.programmers.co.kr:5003',
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const slashedUrl = ensureLeadingSlash(config.url ?? '');

    store.dispatch(
      setFetchingState({
        url: slashedUrl as AllUrlList,
        method: config.method as Methods,
        state: { isLoading: true, error: null, data: null },
      }),
    );
    const token = localStorage.getItem('auth-token');

    if (token && authRequiredUrlList.includes(slashedUrl)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (formHeaderRequiredUrlList.includes(slashedUrl)) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  },
  function (error: AxiosError) {
    const slashedUrl = ensureLeadingSlash(error.config?.url ?? '');

    store.dispatch(
      setFetchingState({
        url: slashedUrl as AllUrlList,
        method: error.config?.method as Methods,
        state: { isLoading: false, error, data: null },
      }),
    );
    // eslint-disable-next-line no-console
    console.error(`요청 인터셉터 에러: ${error.message}`);

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    const slashedUrl = ensureLeadingSlash(response.config.url ?? '');

    store.dispatch(
      setFetchingState({
        url: slashedUrl as AllUrlList,
        method: response.config.method as Methods,
        state: { isLoading: false, error: null, data: null },
      }),
    );
    return response;
  },
  (error: AxiosError) => {
    const slashedUrl = ensureLeadingSlash(error.config?.url ?? '');
    // eslint-disable-next-line no-console
    console.error(error);
    store.dispatch(
      setFetchingState({
        url: slashedUrl as AllUrlList,
        method: error.config?.method as Methods,
        state: { isLoading: false, error, data: null },
      }),
    );
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
