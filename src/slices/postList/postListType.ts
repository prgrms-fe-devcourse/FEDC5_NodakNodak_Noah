import { Post } from '@/types/APIResponseTypes';

export interface PostList {
  posts: Post[];
  isLoading: boolean;
}
