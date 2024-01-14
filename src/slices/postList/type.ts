import { Post } from '@/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface InitialState {
  posts: Post[];
  postListByChannelId: Post[];
  postListByUserId: Post[];
  postListByMyId: Post[];
  status: StatusType;
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
