import { User } from 'src/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface UserInfo {
  currentUser: User;
  authUser: User;
  isLoading: boolean;
  authUserStatus: StatusType;
}
