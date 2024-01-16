import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedPostListByUser = () =>
  useSelector((state: RootState) => state.postList.postListByUserId);
