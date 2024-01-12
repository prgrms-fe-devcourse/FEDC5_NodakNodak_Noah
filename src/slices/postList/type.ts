import { Post } from '@/types/APIResponseTypes';

export interface PostList {
  posts: Post[];
  postListByChannelId: Post[];
  postListByUserId: Post[];
  postListByMyId: Post[];
  isLoading: boolean;
}

export interface GetPostsByChannelIdParams {
  channelId: string;
  offset?: number;
  limit?: number;
}

export interface GetPostsByUserIdParams {
  userId: string;
  offset?: number;
  limit?: number;
}
