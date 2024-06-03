import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const makeQueryResponse =
  (axiosInstance: AxiosInstance) =>
  <T>(config: AxiosRequestConfig): Promise<T> =>
    axiosInstance({
      ...config,
    }).then(({ data }: AxiosResponse) => data);
