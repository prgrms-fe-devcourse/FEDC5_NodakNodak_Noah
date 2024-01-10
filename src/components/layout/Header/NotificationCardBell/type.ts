import { Comment } from '@/types/APIResponseTypes';

export interface NotificationData {
  comment: Comment;
  follower: string;
}
