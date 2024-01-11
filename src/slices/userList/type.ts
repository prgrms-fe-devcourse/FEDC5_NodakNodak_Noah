import { User } from '@/types/APIResponseTypes';

export interface UserList {
  users: User[];
  isLoading: boolean;
}
