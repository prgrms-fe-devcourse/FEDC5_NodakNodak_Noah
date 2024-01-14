import { Post } from '@/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface PostId {
  postId: string | undefined;
}

export interface InitialState {
  post: Post;
  status: StatusType;
}
