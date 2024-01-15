import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedUserList = () =>
  useSelector((state: RootState) => state.userList.users);

export const useSelectedUserListLoading = () =>
  useSelector((state: RootState) => state.userList.status === 'loading');
