import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedUser = () =>
  useSelector((state: RootState) => state.userInfo.currentUser);
