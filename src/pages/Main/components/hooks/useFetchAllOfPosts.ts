import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { getAllPostList } from '@/apis/getPosts';

interface UseFetchAllOfPostsParams {
  limit: number;
}

const useFetchAllOfPosts = ({ limit }: UseFetchAllOfPostsParams) =>
  useInfiniteQuery({
    queryKey: ['posts', 'all'],
    queryFn: ({ pageParam = 1 }) =>
      getAllPostList({ limit, offset: pageParam }),
    getNextPageParam: (lastPage, _, lastPageParmas) =>
      lastPage.length < limit ? undefined : lastPageParmas + limit,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page),
    placeholderData: keepPreviousData,
  });

export default useFetchAllOfPosts;
