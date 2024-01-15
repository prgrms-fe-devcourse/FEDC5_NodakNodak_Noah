import { User } from '@/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface UserList {
  users: User[];
  status: StatusType;
}
