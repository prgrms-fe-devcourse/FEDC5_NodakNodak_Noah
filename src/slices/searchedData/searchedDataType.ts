import { User } from '@/types/APIResponseTypes';

export interface SearchedData {
  postData: SearchedPost[];
  userData: User[];
  isLoading: boolean;
}

export interface SearchedPost {
  likes: string[];
  comments: string[];
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}
