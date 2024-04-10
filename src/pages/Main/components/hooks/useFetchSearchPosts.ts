import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getPostListBySearch } from '@/apis/getPosts';

interface UseFetchSearchPostsParams {
  search?: string;
}

const useFetchSearchPosts = ({ search }: UseFetchSearchPostsParams) =>
  useQuery({
    queryKey: ['posts', 'search', search],
    queryFn: () =>
      search ? getPostListBySearch({ search }) : Promise.resolve([]),
    placeholderData: keepPreviousData,
  });

export default useFetchSearchPosts;
