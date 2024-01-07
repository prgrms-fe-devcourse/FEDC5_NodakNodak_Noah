import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedPostDetail = () =>
  useSelector((state: RootState) => state.postDetail.post);
