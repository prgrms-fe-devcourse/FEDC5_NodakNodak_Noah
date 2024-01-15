import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedPostDetail = () =>
  useSelector((state: RootState) => state.postDetail.post);

export const useSelectedPostDetailLoading = () =>
  useSelector((state: RootState) => state.postDetail.status === 'loading');
