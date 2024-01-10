import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedFollowData = () =>
  useSelector((state: RootState) => state.follow.followData);
