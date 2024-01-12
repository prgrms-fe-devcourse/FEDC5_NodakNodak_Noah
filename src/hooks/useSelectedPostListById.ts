import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedPostListByUserId = () =>
  useSelector((state: RootState) => state.postList.postListByUserId);

export const useSelectedPostListByChannelId = () =>
  useSelector((state: RootState) => state.postList.postListByChannelId);

export const useSelectedPostListByMyId = () =>
  useSelector((state: RootState) => state.postList.postListByMyId);
