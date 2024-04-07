import { StatusType } from '@/slices/type';
import { Post } from '@/types/APIResponseTypes';

export interface PostId {
  postId: string | undefined;
}

export interface InitialState {
  post: Post;
  status: StatusType;
}
