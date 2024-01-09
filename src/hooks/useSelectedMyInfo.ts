import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedMyInfo = () =>
  useSelector((state: RootState) => state.userInfo.authUser);
