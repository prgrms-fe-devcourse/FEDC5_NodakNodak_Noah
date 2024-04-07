import { useEffect } from 'react';
import {
  useSelectedSearchedDataLoading,
  useSelectedSearchedPostData,
} from '@/hooks/useSelectedSearchedData';
import { searchAllData } from '@/slices/searchedData/thunk';
import { useDispatch } from '@/store';

export const useSearchPosts = (keyword: string | null) => {
  const dispatch = useDispatch();
  const searchedPostLoading = useSelectedSearchedDataLoading();
  const searchedPosts = useSelectedSearchedPostData();

  useEffect(() => {
    if (!keyword) return;
    const postKeyword = `"title":"[^"]*${keyword}[^"]*"|"content":"[^"]*${keyword}[^"]*"`;
    dispatch(searchAllData({ keyword: postKeyword }));
  }, [dispatch, keyword]);

  return { searchedPostLoading, searchedPosts };
};
