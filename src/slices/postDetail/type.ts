import { Post } from '@/types/APIResponseTypes';

export interface PostId {
  postId: string | undefined;
}

export interface DetailPost {
  post: Post;
  isLoading: boolean;
}
