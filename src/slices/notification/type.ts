import { StatusType } from '@/slices/type';
import { Notification } from '@/types/APIResponseTypes';

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
