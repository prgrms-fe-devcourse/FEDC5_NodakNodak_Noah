import { User } from 'src/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface UserInfo {
  currentUser: User;
  authUser: User;
  authUserStatus: StatusType;
  currentUserStatus: StatusType;
}
