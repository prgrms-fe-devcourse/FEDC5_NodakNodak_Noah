import { Notification } from '@/types/APIResponseTypes';

export interface InitialState {
  notifications: Notification[];
  isLoading: boolean;
}
