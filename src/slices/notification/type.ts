import { Notification } from '@/types/APIResponseTypes';

export interface InitialState {
  notifications: Notification[];
  isLoading: boolean;
}

export interface CreateNotificationData {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}
