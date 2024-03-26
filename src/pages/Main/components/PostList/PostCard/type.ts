import { Comment, User } from '@/types/APIResponseTypes';

export interface PostCardProps {
  image?: string;
  title: string;
  author: User;
  postId: string;
  comments: Comment[];
}
