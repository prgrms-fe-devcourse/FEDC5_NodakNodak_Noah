import { StatusType } from '@/slices/type';
import { User } from '@/types/APIResponseTypes';

export interface UserList {
  users: User[];
  status: StatusType;
}
