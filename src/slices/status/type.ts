import { AxiosError } from 'axios';
import { AllUrlList, Methods } from '@/utils/customAxios/type';

export type AllowedKeys =
  | `get_${AllUrlList}${string}`
  | `post_${AllUrlList}${string}`
  | `put_${AllUrlList}${string}`
  | `delete_${AllUrlList}${string}`;

export interface AxiosState {
  isLoading: boolean;
  error: AxiosError | null;
  data: object | null;
}
export type StatusState = {
  [key in AllowedKeys]: AxiosState;
};

export interface SetFetchingStatePayload {
  url: AllUrlList;
  method: Methods;
  state: AxiosState;
}
