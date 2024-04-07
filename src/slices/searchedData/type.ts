import { StatusType } from '@/slices/type';
import { Comment, User } from '@/types/APIResponseTypes';

export interface InitialState {
  postData: SearchedPost[];
  userData: User[];
  status: StatusType;
}

export interface SearchedPost {
  likes: string[];
  comments: Comment[];
  _id: string;
  title: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  image?: string;
}
