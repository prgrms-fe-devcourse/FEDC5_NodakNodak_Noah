import { useEffect } from 'react';

import { useDispatch } from '@/store';
import { searchAllData } from '@/slices/searchedData/thunk';
import {
  useSelectedSearchedDataLoading,
  useSelectedSearchedPostData,
} from '@/hooks/useSelectedSearchedData';

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
