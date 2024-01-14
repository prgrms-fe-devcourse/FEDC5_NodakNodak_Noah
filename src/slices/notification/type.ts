import { Notification } from '@/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export type NotificationWithType = Notification & { type: string };

export interface InitialState {
  notifications: Array<NotificationWithType>;
  status: StatusType;
}

export interface CreateNotificationData {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}
