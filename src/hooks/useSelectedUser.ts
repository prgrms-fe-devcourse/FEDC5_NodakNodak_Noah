import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedUser = () =>
  useSelector((state: RootState) => state.userInfo.currentUser);

export const useSelectedUserLoading = () =>
  useSelector(
    (state: RootState) => state.userInfo.currentUserStatus === 'loading',
  );
