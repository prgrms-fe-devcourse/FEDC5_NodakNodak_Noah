import axios, { AxiosError } from 'axios';
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
    // eslint-disable-next-line no-console
    console.error(`요청 인터셉터 에러: ${error.message}`);

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
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
