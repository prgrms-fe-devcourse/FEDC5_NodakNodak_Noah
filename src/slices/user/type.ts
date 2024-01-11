import { User } from 'src/types/APIResponseTypes';

export interface UserInfo {
  currentUser: User | undefined;
  authUser: User | undefined;
  isLoading: boolean;
}
