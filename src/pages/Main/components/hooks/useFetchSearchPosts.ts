import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getPostListBySearch } from '@/apis/getPosts';

const useFetchSearchPosts = (search?: string) =>
  useQuery({
    queryKey: ['posts', 'search', search],
    queryFn: () =>
      search ? getPostListBySearch({ search }) : Promise.resolve([]),
    placeholderData: keepPreviousData,
  });

export default useFetchSearchPosts;
