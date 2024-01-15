import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedSearchedPostData = () =>
  useSelector((state: RootState) => state.searchedData.postData);

export const useSelectedSearchedUserData = () =>
  useSelector((state: RootState) => state.searchedData.userData);

export const useSelectedSearchedDataLoading = () =>
  useSelector((state: RootState) => state.searchedData.status === 'loading');
