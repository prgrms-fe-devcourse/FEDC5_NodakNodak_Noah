import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedPostList = () =>
  useSelector((state: RootState) => state.postList.posts);
