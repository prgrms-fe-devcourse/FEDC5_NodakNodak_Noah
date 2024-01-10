import { User, Comment } from '@/types/APIResponseTypes';

export interface SearchedData {
  postData: SearchedPost[];
  userData: User[];
  isLoading: boolean;
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
