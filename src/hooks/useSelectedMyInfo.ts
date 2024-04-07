import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedMyInfo = () => {
  return useSelector((state: RootState) => state.userInfo.authUser);
};

export const useSelectedMyInfoStatus = () =>
  useSelector((state: RootState) => state.userInfo.authUserStatus);

export const useSelectedMyInfoLoading = () =>
  useSelector(
    (state: RootState) => state.userInfo.authUserStatus === 'loading',
  );
