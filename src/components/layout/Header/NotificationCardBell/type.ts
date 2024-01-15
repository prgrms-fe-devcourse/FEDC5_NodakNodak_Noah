import { User } from '@/types/APIResponseTypes';

export interface NotificationData {
  _id: string;
  text: string;
  isFollowing: boolean;
  author: User;
  handleClick?: () => void | undefined;
}
