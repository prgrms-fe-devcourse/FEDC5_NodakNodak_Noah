import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedPost = () =>
  useSelector((state: RootState) => state.postDetail.post);
