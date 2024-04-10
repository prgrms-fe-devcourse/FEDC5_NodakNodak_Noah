import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getFullPostList } from '@/apis/getPosts';

interface UseFetchAllOfPostsParams {
  limit: number;
}

const useFetchAllOfPosts = ({ limit }: UseFetchAllOfPostsParams) =>
  useInfiniteQuery({
    queryKey: ['posts', 'all'],
    queryFn: ({ pageParam = 1 }) =>
      getFullPostList({ limit, offset: pageParam }),
    retry: (failureCount, error: AxiosError) =>
      error.status === 502 && failureCount < 3,
    getNextPageParam: (lastPage, _, lastPageParmas) =>
      lastPage.length < limit ? undefined : lastPageParmas + limit,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page),
    placeholderData: keepPreviousData,
  });

export default useFetchAllOfPosts;
